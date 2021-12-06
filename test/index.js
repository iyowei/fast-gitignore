import path from "path";
import fastGitignore from "../index.js";

(async () => {
  const rslt = await fastGitignore({
    ignore: ['Windows', 'SVN'],
    templatesDir: path.join(process.cwd(), "test/tpls"),
  });

  console.log(rslt);
})();
