<!--
* description: 模板-表单
* author: dings
* createdDate: 2020-07-28
* logs:
-->
<template>
  <section class="filter-params-e3s">
    <el-button v-for="(item, i) in buttons" 
    :key="`name_${i}`" 
    :disabled="item.disabled" 
    @click="item.event" 
    :type="item.type || 'default'"
    :icon="item.icon" 
    size="small">{{item.label}}</el-button>
  </section>
</template>
<script>
export default {
  props: {
    // 创建表单的参数
    dynamicButtons: { type: Array, default: () => [
        {
            label:'查询',
            disabled:false,
            type:'warning',
            event:()=>{
                alert('查询事件')
            }
        },
        {
            label:'重置',
            disabled:false,
            type:'info',
            event:()=>{
                alert('重置事件')
            }
        },
        {
            label:'导出',
            disabled:false,
            type:'success',
            event:()=>{
                alert('重置事件')
            }
        },
        {
            label:'审核',
            disabled:false,
            type:'primary',
            event:()=>{
                alert('审核事件')
            }
        },
        {
            label:'拒绝',
            disabled:false,
            type:'danger',
            event:()=>{
                alert('拒绝事件')
            }
        }

    ] },
    // 组件名
    name: { type: String, default: '' }
  },
  data() {
    return {
      // 表单列
      buttons: this.dynamicButtons
    };
  },
  created() {
    //设置button的图标
    this.setIcon();
  },
  methods: {
    setIcon(){
      const that = this
      this.buttons.map(function(item, i){
        switch(item.label){
          case '查询':
            item.icon = 'el-icon-search'
            break
          case '重置':
            item.icon = 'el-icon-refresh'
            break
          case '导出':
            item.icon = 'el-icon-folder-opened'
            break
          case '审核':
            item.icon = 'el-icon-edit'
            break
          case '拒绝':
            item.icon = 'el-icon-warning-outline'
            break
        }
      })
    }
  }
};
</script>
