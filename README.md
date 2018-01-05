# angularjs-sample

Angular.js 1.x sample.

# Technologies

前端：
* javascript前端框架: [Angular.js]
* javascript编码规范: [Airbnb JavaScript Style Guide] 
* angular.js编码规范: [Angular.js code style]
* javascript 代码检查: [eslint]
    - plugin: [eslint-plugin-angular](https://www.npmjs.com/package/eslint-plugin-angular)
    - config: [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)

* css 命名规范: [BEM]
* css 初始化: [Normalize.css]
* css 代码检查: [stylelint]

后端：
* [node.js]
* [express]

自动化工具：
* [Grunt]

# Architecture

```
     +--------+
     |  app   |
     +--------+
        |
        |
        V
     +------------------+
     |   app.feature1   |
     |   app.feature2   |
     |   app.feature3   |
     |   ...            |
     +------------------+
        |
        +-------------------+
        |                   |
        V                   v
     +-----------+     +---------------+
     |  app.core |     |  app.widgets  |
     +-----------+     +---------------+
        |
        |
        v
     +------------------+
     | blocks.exception |
     | blocks.logger    |
     | ...              |
     +------------------+

```

* 第一层：app启动模块。存放app启动逻辑和模块依赖。
* 第二层：app的功能模块。
* 第三层：此app的通用模块。如 常量，数据服务，控件等。
* 第四层：跨app的通用模块。如 blocks.exception,blocks.logger。

# How to use

1. 克隆本代码仓库
2. `npm install`
3. `bower install`
4. 普通开发使用`grunt`命令；发布使用`grunt dist`

# Automation

1. [grunt-wiredep]: 自动注入Bower文件
1. [grunt-eslint]: javascript 代码检查 
1. [grunt-stylelint]: css 代码检查
1. [grunt-image]: 图片优化
1. [grunt-angular-templates]: caching your HTML templates with $templateCache。
1. [grunt-contrib-concat]: 合并css/javascript文件
1. [grunt-ng-annotate]: angular自动注入依赖
1. [grunt-postcss]: css后处理
1. [grunt-contrib-cssmin]: css压缩
1. [grunt-contrib-uglify]: javascript 压缩
1. [grunt-usemin]: 组合concat/cssmin/uglify，为它们自动生成配置，并在最后替换index.html里的对应代码块为优化后的css/js文件

# More

管理后台模板：[admin template themes | WrapBootstrap](https://wrapbootstrap.com/tag/admin-template)


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[Angular.js]: <http://angularjs.org>
[Airbnb JavaScript Style Guide]: <https://github.com/airbnb/javascript>
[angular.js code style]: <https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md>
[jQuery]: <http://jquery.com>
[eslint]: <http://eslint.org/>
[Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>

[BEM]: <https://en.bem.info/>
[Normalize.css]: <http://necolas.github.io/normalize.css/>
[stylelint]: <https://stylelint.io/>

[node.js]: <http://nodejs.org>
[express]: <http://expressjs.com>

[Grunt]: <https://gruntjs.com/>
[grunt-wiredep]: <https://www.npmjs.com/package/grunt-wiredep>
[grunt-eslint]: <https://www.npmjs.com/package/grunt-eslint>
[grunt-stylelint]: <https://www.npmjs.com/package/grunt-stylelint>
[grunt-angular-templates]: <https://www.npmjs.com/package/grunt-angular-templates>
[grunt-contrib-concat]: <https://www.npmjs.com/package/grunt-contrib-concat>
[grunt-contrib-cssmin]: <https://www.npmjs.com/package/grunt-contrib-cssmin>
[grunt-contrib-uglify]: <https://www.npmjs.com/package/grunt-contrib-uglify>
[grunt-image]: <https://www.npmjs.com/package/grunt-image>
[grunt-ng-annotate]: <https://www.npmjs.com/package/grunt-ng-annotate>
[grunt-postcss]: <https://www.npmjs.com/package/grunt-postcss>
[grunt-usemin]: <https://www.npmjs.com/package/grunt-usemin>
