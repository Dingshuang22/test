<template>
  <div class="dialog" v-show="showMask">
    <div class="dialog-container">
      <div class="dialog-title">{{title}}</div>
      <div class="content" v-html="content"></div>
      <div class="btns">
        <div v-if="type == 'danger'" class="danger-btn" @click="dangerBtn">{{dangerText}}</div>
        <div v-if="type == 'confirm'" class="confirm-btn" @click="confirmBtn">{{confirmText}}</div>
        <div class="default-btn" @click="closeBtn">{{cancelText}}</div>
      </div>
      <div class="close-btn" @click="closeMask">
        <i class="">×</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogBar',
  props: {
    parentclick: {
      type: Function,
      default: () => {}
    },
    value: {
      type: Boolean,
      default: () => true
    },
    // 类型包括 defalut 默认， danger 危险， confirm 确认，
    type: {
      type: String,
      default: 'deault'
    },
    content: {
      type: String,
      default: '内容...'
    },
    title: {
      type: String,
      default: '标题...'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    dangerText: {
      type: String,
      default: '删除'
    },
    confirmText: {
      type: String,
      default: '确认'
    }
  },
  data () {
    return {
      showMask: true
    }
  },
  methods: {
    closeMask () {
      this.$emit('close')
    },
    closeBtn () {
      this.$emit('cancel')
      this.closeMask()
    },
    dangerBtn () {
      this.$emit('danger')
      this.closeMask()
    },
    confirmBtn () {
      this.$emit('confirm')
      this.closeMask()
    }
  },
  mounted () {
    this.showMask = this.value
  },
  watch: {
    value (newVal, oldVal) {
      this.showMask = newVal
    },
    showMask (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang='scss'>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
.dialog-container {
  width: 300px;
  height: 280px;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  position: relative;
}
.dialog-title {
  width: 100%;
  height: 60px;
  font-size: 18px;
  color: #696969;
  font-weight: 600;
  padding: 16px 50px 0 20px;
  box-sizing: border-box;
}
.content {
  color: #797979;
  line-height: 26px;
  padding: 0 20px;
  box-sizing: border-box;
  overflow:hidden;
}
.inp {
  margin: 10px 0 0 20px;
  width: 200px;
  height: 40px;
  padding-left: 4px;
  border-radius: 4px;
  border: none;
  background: #efefef;
  outline: none;
}
.inp:focus {
  border: 1px solid #509ee3;
}
.btns {
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: right;
  padding: 0 16px;
  box-sizing: border-box;
}
.btns > div {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  color: #ffffff;
  background: #f1f1f1;
  border-radius: 8px;
  margin-right: 12px;
  cursor: pointer;
}
.btns > .default-btn {
  color: #787878;
}
.btns > .default-btn:hover {
  color: #509ee3;
}
.btns > .danger-btn {
  background: #ef8c8c;
}
.btns > .danger-btn:hover {
  background: rgb(224, 135, 135);
}
.btns > .danger-btn:active {
  background: #ef8c8c;
}
.btns > .confirm-btn {
  color: #ffffff;
  background: #509ee3;
}
.btns > .confirm-btn:hover {
  background: #6fb0eb;
}
.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
}
.close-btn:hover {
  font-weight: 600;
}
</style>
