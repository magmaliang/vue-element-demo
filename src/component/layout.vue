<template>
  <div>
    <router-view class="view"></router-view>
    <h1>url-loader-test</h1>
		<div class="bg-img"></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {}
};
</script>


<style lang='css'>
/* 波浪号表示后面是个module, 下例所示的assets在webpack的alias中定义过，可以理解为一个module，具体见： https://github.com/webpack-contrib/css-loader/issues/49 */
.bg-img {
	height: 200px;
	background: url('~assets/abc.png') no-repeat;
}
</style>
