<template>
	<el-form ref="form" label-width="80px">
  <el-form-item label="姓名">
    <el-input v-model="formdata.name"></el-input>
  </el-form-item>
  <el-form-item label="地址">
    <el-input type="textarea" v-model="formdata.addr"></el-input>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间"  style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch on-text="" off-text="" ></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group >
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group >
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>

</el-form>
</template>

<script>
  // 此表单直接copy自 element官方例子 http://element.eleme.io/#/zh-CN/component/form，可以参照其修改
  export default {
    props: ['formdata']
    ,methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>