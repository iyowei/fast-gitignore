# await fastGitignore({ignore, templatesDir});

从 [自定义模板库](https://github.com/github/gitignore) 中获取 .gitignore 模板。

## 安装

```shell
# 使用 Pnpm
$ pnpm add @iyowei/fast-gitignore

# 使用 NPM
$ npm i @iyowei/fast-gitignore

# 使用 Yarn
$ yarn add @iyowei/fast-gitignore
```

## 使用

- `ignore` {Array} .gitignore 主题集合，**默认：** `[]`；
- `templatesDir` {String} 模板库磁盘位置，**默认：** `.`；
- 返回: {Object} 键是模板文件路径，值是模板内容。

```javascript
import path from "path";
import fastGitignore from 'fast-gitignore';

(async () => {
  const rslt = await fastGitignore({
    ignore: ['Windows', 'SVN'],
    templatesDir: path.join(process.cwd(), "templates"),
  });

  console.log(rslt);
  /**
   * {
   *   '~/Development/iyowei/fast-gitignore/templates/SVN.gitignore': '.svn/\n'
   *   '~/Development/iyowei/fast-gitignore/templates/Windows.gitignore': '# Windows thumbnail cache files\n' + 'Thumbs.db\n' + 'Thumbs.db:encryptable\n' + 'ehthumbs.db\n' + 'ehthumbs_vista.db\n' + '\n' + '# Dump file\n' + '*.stackdump\n' + '\n' + '# Folder config file\n' + '[Dd]esktop.ini\n' + '\n' + '# Recycle Bin used on file shares\n' + '$RECYCLE.BIN \n' + '\n' + '# Windows Installer files\n' + '*.cab\n' + '*.msi\n' + '*.msix\n' + '*.msm\n' + '*.msp\n' + '\n' + '# Windows shortcuts\n' + '*.lnk\n',
   *   ...
  }*/

})();
```
