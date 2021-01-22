---
title: Nuxt.js学习总结
date: 2021-01-11
commentid: 123445
---

[toc]
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [1.middleware定义](#1middleware定义)
- [2.validate 参数验证 (pages)](#2validate-参数验证-pages)
- [3.asyncData 服务端请求异步数据 (pages)](#3asyncdata-服务端请求异步数据-pages)
- [4.扩展路由（nuxt.config）](#4扩展路由nuxtconfig)
- [5.定制错误页面 （layout）](#5定制错误页面-layout)
- [6.动画定制 （css,pages, nuxt.config）](#6动画定制-csspages-nuxtconfig)
  - [全局](#全局)
  - [局部](#局部)
- [7.路由守卫](#7路由守卫)
  - [全局守卫](#全局守卫)
  - [组件局部守卫](#组件局部守卫)
  - [局部后置守卫](#局部后置守卫)
- [8.数据请求 (nuxt.config)](#8数据请求-nuxtconfig)
- [9.开启代理](#9开启代理)
- [10.axios拦截](#10axios拦截)
- [10.配置loading （nuxt.config）](#10配置loading-nuxtconfig)
- [11.vuex](#11vuex)
- [12.配置UI库](#12配置ui库)
- [13.定制meta（nuxt.config,pages）](#13定制metanuxtconfigpages)
- [14.路径别名](#14路径别名)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


借助这次摸🐟 的时间总结了一些实战用到的知识点，希望能让大家少踩点坑，文采不好，凑合着看。

> https://www.nuxtjs.cn/guide


### 1.middleware定义

middleware顾名思义就是中间件的意思，在中间价可以做路由拦截，参数过滤等等...middleware有以下三种定义方式。

 + nuxt.config 配置文件定义

 ```javascript
 export default{
 router:{
     //直接写中间件文件名，比如middleware/auth.js，直接写auth就ojbk
     middleware: ['xxxx'] 
  }
}
 ```

 **特别提醒⏰ ：定义在nuxt.config中的中间件要在根目录的middleware文件下，定义对应的js文件，导出一个函数。**

 + layout页面定义

 ```javascript
 export default {
  middleware:({route,params,query})=>{
    console.log(route,params,query, 'layout')
  }
}

 ```

  + pages页面定义
  
  ```javascript
  export default {
  middleware:({route,params,query})=>{
    console.log(route,params,query, 'page')
  }
}
```
middleware的第一参数是一个上下文参数，能够解构出route,params,query等等...参数，足够我们做各种骚操作。既然它们能够定义在不同位置，那么它们的执行顺序就有前有后👇。

**执行顺序：nuxt.config => layout => page**


### 2.validate 参数验证 (pages)

validate钩子主要是做页面级别（pages）的参数验证操作,在它的上下文能够解构出params,query...参数，最后 ```return true``` 代表验证通过，```return false``` 表示验证失败。

```javascript
export default {
  validate({params,query}){
    console.log(params,query,'validate')
    return true
  }
}
```

### 3.asyncData 服务端请求异步数据 (pages)

asyncData 主要做服务端数据请求渲染,在它上下文能够解构出axios,route,params...参数，要解构出axios,route,params...参数，要解构出axios,route,params...参数，要解构出axios，还需要做一些额外配置，往下拉有讲到。解构出$axios，就可以做ajax请求，最后把要渲染的数据return出去就行。

```javascript
export default {
  async asyncData({$axios,route}){
    let data = await $axios('xxx/xxx/xx')
    return {
     data
    }
  }
}
```

### 4.扩展路由（nuxt.config）
在nuxt默认为约定是路由，就是在pages在创建一个文件，或者一个文件夹就会自动创建对应的路由，无需手动配置什么，方便极了，这里就不多说，这里只要说一下，当我们要对某个地址做一个特殊操作的时候，或者全面接管约定式路由的时候，就需要用扩展路由了。

假如想让一个叫 ```/hahaha/:id``` 的路由也跳到详情，也这样做👇

```javascript
export default {
  router:{
    extendRoutes:(routes,resolve)=>{
      routes.push({
        name:"hahaha",
        path:'/hahaha/:id',
        component:resolve(__dirname,'pages/detail/_id.vue')
      })
    }
  }
}
```
假如要全面接管约定式路由，可以这样做👇

```javascript
export default {
  router:{
    extendRoutes(routes, resolve){
     return [
       {
         name:"home",
         path:"/",
         component:resolve(__dirname,'pages/index'),
         meta:{
           title:"home"
         }
       }
       // ...这里还可以继续写，一般如果要接管约定式路由的话，都会把它放到一个文件再引入
     ]
    }
  }
}
```

### 5.定制错误页面 （layout）

处理错误页面，默认情况下，nuxt提供了一个默认的错误页面，如果你嫌它错的哇，也可以自己定制一个风骚的错误页面，直接下layout目录下定义一个error.vue文件就可以定制自己喜欢的错误页面了，它会代替默认的错误页面，在error.vue的prop有个error属于是包含错误信息的

```html
<template>
  <div>
      错误页面{{ error }}
  </div>
</template>
<script>
export default {
   props:['error']
}
</script>
```

### 6.动画定制 （css,pages, nuxt.config）

#### 全局

假如想要全局实现一个路由切换动画，那么可以在根目录的assets/css目录(全局css样式可以随便你放，一般都会放在assets下,你也可以放在某个角落)定义一个全局文件，实现一下以下几个类👇

 + page-enter-active

 + page-leave-active

 + page-enter

 + page-leave

 ```css
 
.page-enter-active, .page-leave-active{
    transition: opacity 1.5s;
}
.page-enter, .page-leave-active{
    opacity: 0;
}
 ```

 最后在nuxt.config引用这个文件就可以实现一个路由切换的淡入淡出效果。

 ```javascript
 export default {
  css: [
    "assets/css/xxx.css"
  ],
}
```

#### 局部
假如想在某个路由页面有个一种独一无二的入场出场方式的话，也可以为它单独实现独有的效果，只需要给个transition:'xxxx'(xxx是自己起的名字，随便你起),然后实现对应的类就可以实现该有的动画。
 + xxx-enter-active

 + xxx-leave-active

 + xxx-enter

 + xxx-leave

### 7.路由守卫

#### 全局守卫
 + 定义的在nuxt.config的middleware

 + 定义在layout的middleware

 + 定义在plugins

 #### 组件局部守卫
 定义在组件的middleware

 #### 局部后置守卫
 组件beforeRouteLeave钩子

### 8.数据请求 (nuxt.config)

要做数据请求，就要用到axios了，nuxt有为我们集成，只需要安装，引用就可以。

+ 第一步
```javascript
npm i \-D @nuxtjs/axois
```

+ 第二步在nuxt.config引入就可以
```javascript
export default{
 modules: [
  '@nuxtjs/axios'
 ]
}
```

+ 第三步重启，就可以在plugin,aysncData...的上下文解构到$axios参数

**重要提醒⏰ ：nuxt集成的库大多数都要在modules中引入。**

### 9.开启代理
有时候我们的接口出现了跨域，那么我们就要代理了。

+ 第一步 npm i \-D @nuxtjs/proxy
+ 第二步 nuxt.config 下配置
```javascript
export default {
  axios:{
     proxy:true
   }，
   proxy:{
     'api/':{
       target:'http://localhost:3000'
     }
   }
}
```

### 10.axios拦截

在平时开发中请求异步数据，少不了请求前，请求后做一些拦截，在nuxt中也很容易实现，只需定义一个axios拦截plugin
+ 第一步 在plugins目录，起一个性感的插件名，比如叫axios.js
```javascript
export default({$axios})=>{
  // 请求拦截
  $axios.onRequest(req=>{
    // doing something...
  })
  // 响应拦截
  $axios.onResponse(res=>{
    // doing something...
  })
  // 错误拦截
  $axios.onError(err=>{
  // doing something...
  })
}
```

+ 第二步 在nuxt.config中引入插件
```javascript
export default {
plugins: [
    {
      src:'~/plugins/axios',
      // 默认为true，会同时在服务端（asyncData（{$axios}））和客户端（this.$axios）同时拦截axios请求，设为false就只会拦截客户端
      ssr:true 
    }
  ]
}
```

### 10.配置loading （nuxt.config）
配置loading有两种方式。

+ 直接在默认的loading上调样式
```javascript
export default {
  loading: {
    color: 'blue',
    height: '5px'
  }
}
```

+ 定制loading

```javascript
export default {
  loading: '指向一个组件的路径'
}
```

**这个被指向的组件会有两个特殊钩子start, finish钩子，代表开始加载的时候，和加载结束的时候做些什么**


### 11.vuex
配置vuex直接下根目录下的store目录下定义就可以了，注意的是，除了index文件不是具名文件，其他的文件都是具名的,具名的在调用使需要加上这个名字，比如（this.$store.commit('xxx/handle')）。

vuex的文件写法格式如下👇

```javascript
export const state => （{}）

export const getters = {}

export const actions = {}

export const mutations = {}

```

### 12.配置UI库
第三方UI库配置，这里以element-ui为例。

+ 第一步 npm i \-D element-ui
+ 第二步 在plugins目录建议xxx.js然后引入element-ui注册
```javascript
import Vue from 'vue'

import ElementUi from 'element-ui'

Vue.use(ElementUi)
```

+ 第三步 在nuxt.config 配置

```javascript

export default {
  css: [
    "element-ui/lib/theme.chalk/index.css" //引入element-ui的样式
  ],
  plugins: [
    '~/plugins/xxx' // 引入刚刚定义的plugin
  ]
}
```


### 13.定制meta（nuxt.config,pages）
定制可以在nuxt.config中定义全局，也可以在pages下定制单独的。

+ nuxt
```javascript
export default {
  head: {
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
```

+ pages

```javascript
export default {
  head:()=>({
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  })
}

```

### 14.路径别名
路径别名:~ 或 @ srcDir , ~~ 或 @@ rootDir (默认情况下，srcDir 和 rootDir 相同)




