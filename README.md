# Jormin音乐平台

个人学习项目，包含的主要功能有：音乐搜索、专辑搜索、音乐播放、MV播放。

采用的前端框架是[Vue](https://github.com/vuejs/vue)，结合[metowolf](https://github.com/metowolf)的[NeteaseCloudMusicApi](https://github.com/metowolf/NeteaseCloudMusicApi)提供的接口来获取[网易云音乐](https://music.163.com)的数据。

音乐播放器采用的是[网易云音乐](https://music.163.com)的播放组件样式，结合自己封装的播放器类库来提供相关api。

## 使用

使用时需修改 `login.php` 中的登录接口地址为自己的登录接口，或者去掉 `index.php` 中的登录限制。
 
## Vue - 渐进式 JavaScript 框架

Vue.js 是一套构建用户界面的渐进式框架，采用自底向上增量开发的设计，核心库只关注视图层，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用。它的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。
[Vue 教程文档参考](https://cn.vuejs.org/v2/guide/)

## Simplemodal - 漂亮大方的模态框组件

SIMPLE MODAL是一个小的基于MooTools插件创建的模态窗口组件。 它可以用少量代码生成成弹出框或确认框。 它可以在异步模式下工作，并从外部页面检索内容或获取内联内容。
 [Simplemodal 官方库](https://github.com/plasm/simplemodal)

## Vimeo Player - Vimeo官方的视频播放器

Vimeo  是一个高清视频播客网站，它的视频播放器非常美观漂亮，本项目中使用它来播放MV。
[Vimeo 官方网站](https://vimeo.com/).

## License

[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 Jormin Xee
