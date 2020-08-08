<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-warn"></i> 权限按钮
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <MixButton :dynamicButtons="dynamicButtons" />
    </div>
    <div>
      <h2>{{$t('i18n.excel')}}</h2>
    </div>
    <h2>dds</h2>
    <h2>dds2</h2>
  </div>
</template>

<script>
import MixButton from "@/components/common/MixButtons.vue";
export default {
  name: "permissionbutton",
  data() {
    return {
      type:'',
      dynamicButtons: [
        {
          label: "查询",
          disabled: false,
          type: "warning",
          event: () => {
            alert("查询事件");
          },
        },
        {
          label: "重置",
          disabled: false,
          type: "info",
          event: () => {
            alert("重置事件");
          },
        },
        {
          label: "导出",
          disabled: false,
          type: "success",
          event: () => {
            alert("导出事件");
          },
        },
        {
          label: "审核",
          disabled: false,
          type: "primary",
          event: () => {
            alert("审核事件");
          },
        },
        {
          label: "拒绝",
          disabled: false,
          type: "danger",
          event: () => {
            alert("拒绝事件");
          },
        },
      ],
    };
  },
  mounted(){
   console.log(this.$t('i18n.excel'))
  },
  components: {
    MixButton,
  },
};
</script>

<style>
</style>