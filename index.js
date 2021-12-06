import { readFileSync } from "fs";
import { join } from "path";
import { cpus } from "os";

import fg from "fast-glob";
import pMap from "p-map";
import arrify from "arrify";
import deepmerge from "deepmerge";

/**
 * fastGitignore({ignore, templatesDir});
 *
 * @param {Array} ignore - .gitignore 主题集合
 * @param {Array} templatesDir - 模板库磁盘位置
 */
export default async function fastGitignore({
  ignore = [],
  templatesDir = ".",
}) {
  const GLOB = `{${arrify(ignore).join(",")}}`;

  const templatePaths = await fg([join(templatesDir, `${GLOB}.gitignore`)]);

  const gotGitignore = await pMap(
    templatePaths,
    async (filePath) => ({ [filePath]: readFileSync(filePath, "utf8") }),
    { concurrency: cpus().length }
  );

  // 缓存文件路径：意义不大，本来就是本地的
  // 缓存文件内容：
  return deepmerge.all(gotGitignore);
}
