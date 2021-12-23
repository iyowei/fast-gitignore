import path from "path";
import assert from "assert";

import { fastGitignoreSync, fastGitignore } from "./index.js";

describe('fastGitignoreSync({ topic = [], templatesDir = "." })', () => {
  const got = fastGitignoreSync({
    topic: ["Windows", "SVN"],
    templatesDir: path.join(process.cwd(), "tpls"),
  });

  describe('topic = ["Windows", "SVN"]', () => {
    it("返回的是个对象字面量", () => {
      assert.equal(Object.prototype.toString.call(got), "[object Object]");
    });

    it("返回的内容包含 2 个主题", () => {
      assert.equal(Object.entries(got).length, 2);
    });
  });
});

(async () => {
  const got = await fastGitignore({
    topic: ["Windows", "SVN"],
    templatesDir: path.join(process.cwd(), "tpls"),
  });

  describe('fastGitignore({ topic = [], templatesDir = "." })', () => {
    describe('topic = ["Windows", "SVN"]', () => {
      it("返回的是个对象字面量", () => {
        assert.equal(Object.prototype.toString.call(got), "[object Object]");
      });

      it("返回的内容包含 2 个主题", () => {
        assert.equal(Object.entries(got).length, 2);
      });
    });
  });
})();
