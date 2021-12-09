<!-- 链接 -->
[纯函数]: https://zh.wikipedia.org/wiki/%E7%BA%AF%E5%87%BD%E6%95%B0
[github/gitignore]: https://github.com/github/gitignore
[latest-gitignore]: https://github.com/iyowei/latest-gitignore

# await fastGitignore({ignore, templatesDir});

> 从 [自定义模板库][github/gitignore] 中获取 .gitignore 模板。

引起不了注意的耗时，说 "只有不到 1 秒" 是完全不夸张的。显然，即使 [github/gitignore][github/gitignore] 已经帮忙节省了很多耗时，但为项目定制 ".gitignore" 的时间依然会分散注意力，因为是靠手动拷贝的方式，尤其是要创建多个项目时。更有甚者，更新 ".gitignore" 时，更加费时，我们使用的操作系统、软件，它们迭代的很快，总有些它们需要但不该被提交到自己项目中的文件冒出来，如果我们大半年都不更新一次 `.gitignore` ，难免日后会无意中污染了代码仓库。

**解决方案：[github/gitignore][github/gitignore] + 自动化的模板内容获取方式。**`await fastGitignore({ignore, templatesDir});` 是后者方式之一，其它方式参见 [相关](#相关)。

## 使用

- `ignore` {Array} .gitignore 主题集合，**默认：** `[]`；
- `templatesDir` {String} 模板库磁盘位置，**默认：** `.`；
- 返回: {Object} 键是模板文件路径，值是模板内容。

`await fastGitignore({ignore, templatesDir});` 是 [纯函数][纯函数]，并不会帮忙创建 ".gitignore" 文件。

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

## 安装

```shell
# 使用 Pnpm
$ pnpm add @iyowei/fast-gitignore

# 使用 NPM
$ npm i @iyowei/fast-gitignore

# 使用 Yarn
$ yarn add @iyowei/fast-gitignore
```

## 相关
- [`latest-gitignore`][latest-gitignore] - 从 `github/gitignore` 项目中获取最新模板。

## 其它

从主观心理的角度来看，存在是因为能够注意到，而能够注意到，前提是时间够慢、够长，或是代价够大、够有影响力，出现频率够高、够新鲜…… 想象下，电风扇转起来，肉眼是注意不到扇叶的，可以透过风扇看到其后的东西。

有时候，一些事情难以推进，原因就是成本太大，而成本太大的原因就是耗时，耗时面临着耗费人力、财力等，结合上述，也就是这些事的存在感十足。

因此，有一种降低成本，叫提升这件事的效率。
