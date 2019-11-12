## 概述

简单展示基于element ui的form ,table增删改查逻辑的前端功能demo.

```javascript
// 项目启动：执行下面两个命令即可
npm install
npm start 

// 项目编译
npm run build

```

## 关键点
### vue的生命周期

一定要理解vue的生命周期，什么时候刷新，什么时候数据会传递。

### element的安装

使用 npm install可以安装，但是样式需要手动去引。见项目

### vue router

router 就是当url的hash发生变化时在指定区域渲染指定的组件。

### 表单

一般新建和编辑用的同一个表单。其流程如下：

**新建-->弹出表单-->保存(成功)->刷新表格**

**编辑-->获取要编辑的数据-->弹出表单-->保存(成功)->刷新表格**

关键问题在于刷新表格，表单和表格一般属于兄弟组件，需要在它们的父组件中定义协调的函数，作为回调传入两者内部实现。如果用了vuex这个会简单点。

另外就是表单弹出的时候数据的初始化，新建的时候需要清除所有数据，编辑则是从请求里面取。

### 表格

表格的关键在于操作列，操作列的里面的按钮点击时需要获取当前行的数据，因为删除查看编辑都是针对当前行的。在element里面可以用scope来获取，具体见文档：
[http://element.eleme.io/#/zh-CN/component/table](http://element.eleme.io/#/zh-CN/component/table)

例子中点击编辑时，通过获取row信息，然后给form赋值。这个功能由contact组件中的editItem传递到table中实现，可以反应兄弟组件之间的数据传递。


## 关于url-loader

url-loader在limit范围内会将指定资源转化成base64,超过limit则会将资源用file-loader处理，所以需要同时安装file-loader.

### 路径问题

使用npm run build可以看到assets资源打包后的情况，原则上file-loader会处理好相对路径。

url-loader不可像css那样使用alias，需要指定格式：

```css
/* 波浪号表示后面是个module, 下例所示的assets在webpack的alias中定义过，可以理解为一个module，
具体见： https://github.com/webpack-contrib/css-loader/issues/49 */
.bg-img {
	height: 200px;
	background: url('~assets/abc.png') no-repeat;
}
```

