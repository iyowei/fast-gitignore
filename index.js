import { readFileSync, readFile } from 'fs';
import { join } from 'path';
import { cpus } from 'os';

import fg from 'fast-glob';
import pMap from 'p-map';
import arrify from 'arrify';

/**
 * await fastGitignore({topic, templatesDir});
 *
 * @param {Array} topic - .gitignore 主题集合
 * @param {Array} templatesDir - 模板库磁盘位置
 */
export async function fastGitignore({ topic = [], templatesDir = '.' }) {
  const GLOB = `+(${arrify(topic).join('|')})`;

  const TPL_PATHS = await fg([join(templatesDir, `${GLOB}.gitignore`)]);

  const gotGitignore = await pMap(
    TPL_PATHS,
    (filePath) =>
      new Promise((resolve, reject) => {
        readFile(filePath, 'utf-8', (err, data) => {
          if (err) {
            reject(err);
            return;
          }

          resolve({ [filePath]: data });
        });
      }),
    { concurrency: cpus().length },
  );

  const PAYLOAD = gotGitignore.reduce((acc, cur) => {
    Object.assign(acc, cur);
    return acc;
  }, {});

  // 缓存文件路径：意义不大，本来就是本地的
  // 缓存文件内容：
  return PAYLOAD;
}

/**
 * fastGitignoreSync({topic, templatesDir});
 *
 * @param {Array} topic - .gitignore 主题集合
 * @param {Array} templatesDir - 模板库磁盘位置
 */
export function fastGitignoreSync({ topic = [], templatesDir = '.' }) {
  const GLOB = `+(${arrify(topic).join('|')})`;

  const TPL_PATHS = fg.sync([join(templatesDir, `${GLOB}.gitignore`)]);

  const PAYLOAD = TPL_PATHS.reduce((acc, cur) => {
    acc[cur] = readFileSync(cur, 'utf8');
    return acc;
  }, {});

  return PAYLOAD;
}
