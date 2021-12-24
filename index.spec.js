import path from 'path';
import assert from 'assert';

import { fastGitignoreSync, fastGitignore } from './index.js';

describe('fastGitignoreSync({ topic = [], templatesDir = "." })', () => {
  describe('topic = ["Windows", "SVN"]', () => {
    const insMultiTopics = fastGitignoreSync({
      topic: ['Windows', 'SVN'],
      templatesDir: path.join(process.cwd(), 'tpls'),
    });

    it('返回的是个对象字面量', () => {
      assert.equal(
        Object.prototype.toString.call(insMultiTopics),
        '[object Object]',
      );
    });

    it('返回的内容包含 2 个主题', () => {
      assert.equal(Object.entries(insMultiTopics).length, 2);
    });
  });

  describe('topic = ["Windows"]', () => {
    const insSingleTopic = fastGitignoreSync({
      topic: ['Windows'],
      templatesDir: path.join(process.cwd(), 'tpls'),
    });

    it('返回的内容包含 1 个主题', () => {
      assert.equal(Object.entries(insSingleTopic).length, 1);
    });
  });
});

(async () => {
  const insMultiTopics = await fastGitignore({
    topic: ['Windows', 'SVN'],
    templatesDir: path.join(process.cwd(), 'tpls'),
  });

  describe('fastGitignore({ topic = [], templatesDir = "." })', () => {
    describe('topic = ["Windows", "SVN"]', () => {
      it('返回的是个对象字面量', () => {
        assert.equal(
          Object.prototype.toString.call(insMultiTopics),
          '[object Object]',
        );
      });

      it('返回的内容包含 2 个主题', () => {
        assert.equal(Object.entries(insMultiTopics).length, 2);
      });
    });

    describe('topic = ["Windows"]', () => {
      it('返回的内容包含 1 个主题', async () => {
        const insSingleTopic = await fastGitignore({
          topic: ['Windows'],
          templatesDir: path.join(process.cwd(), 'tpls'),
        });
        assert.equal(Object.entries(insSingleTopic).length, 1);
      });
    });
  });
})();
