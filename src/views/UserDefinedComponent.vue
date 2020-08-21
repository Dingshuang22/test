<template>
  <div class="user-defined-component">
    <el-button type="danger" @click="showDialog">click me</el-button>
  </div>
</template>

<script>
export default {
  name: 'userdefinedcomponent',
  methods: {
    dialogBtnClick (type) {
      console.log(type)
    },
    showDialog () {
      this.$dialog({
        type: 'confirm',
        title: '信息',
        content: '你考虑好了吗?',
        parentclick: this.dialogBtnClick
      })
    }
  }
}
</script>

<style>

</style>
