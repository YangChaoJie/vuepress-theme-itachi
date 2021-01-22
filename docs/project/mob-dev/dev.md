---
title: 移动端开发环境配置
date: 2020-12-29
author: 开发人员
tags:
- 随笔
categories:
- 随笔
---

### 目的

+ 通过本机，使用vue_devtools访问云桌面的vue项目
+ 通过真机可以使用vconsole调试云桌面vue项目

### 环境准备
+ vue_devtools
+ vconsole工具
+ fiddler抓包工具

### 步骤

#### 1.云桌面vue项目修改配置
项目的html模板文件，一般再public文件夹下，再head标签中增加以下代码

```
<script src="http://vcomyf.bigwoniu.com/vconsole/vconsole.min.js"></script>
<script>
    new window.VConsole();
    // 本机的IP
    window.__VUE_DEVTOOLS_HOST__ = '192.168.144.72';
    // 默认配置不做修改
    window.__VUE_DEVTOOLS_PORT__ = '8098';
</script>
<script src='http://192.168.144.72:8098'></script>
```

#### 2.本机安装vue_devtools，并且启动

参考链接 [https://github.com/vuejs/vue-devtools/tree/dev/packages/shell-electron]()

#### 3.云桌面安装Fiddler抓包工具

#### 4.云桌面配置host和node代理
new.yjt361.com ----> 云桌面IP 

```
10.1.201.126 new.yjt361.com
```
云桌面启动一个本地node代理服务（代码未放入仓库）
```
app.use('/ui/tqms', proxy({
    target: 'http://localhost:8080',
    changeOrigion: true
}));
.
.
.
// 以上是每个单独的代理

// 最终没有匹配到的，会走如下代理
app.use(proxy({
    // 不可是域名， 为IP， 测试服务器IP 对应 new.yjt361.com
    target: 'http://192.168.167.51:20080',
    changeOrigion: false,
    // 是否保持响应头大小写，默认false(响应头全部换成小写)
    preserveHeaderKeyCase: true 
}));
```

#### 5......


