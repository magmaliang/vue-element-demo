<template>
	<div class="container">
		<div class="buttons">
			<el-button type="primary" @click="add">新增</el-button>
		</div>
		<el-dialog
			title="提示"
			:visible.sync="dialogVisible"
			size="tiny"
			:before-close="handleClose">
			<Myform :formdata='formdata'></Myform>
			<span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="saveForm">保 存</el-button>
			</span>
		</el-dialog>
		<Mytable :editItem="editItem"></Mytable>
	</div>
</template>

<script>

import Myform from '../component/form.vue';
import Mytable from '../component/table.vue';

export default {
	components:{
		Myform
		,Mytable
	}
	,data: function(){
		return {
			dialogVisible: false
			,formdata: {
				name:""
				,addr: ""
			}
		}
	}
	,methods:{
		add(){
			this.dialogVisible = true;
		}
		,handleClose(){
			console.log("关闭前勾子")
			this.dialogVisible = false;
		}
		,saveForm(){
			// 这里可以发ajax请求，在回调中关闭dialog即可。这里直接关闭dialog
			this.dialogVisible = false;
		}
		,editItem(row){
			this.formdata = row;
			this.dialogVisible = true;
		}
	}
}
</script>

<style>
	
</style>