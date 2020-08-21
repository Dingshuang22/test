<template>
  <transition
  name="move"
  @after-leave = "afterLeave"
  @enter = "afterEnter"
  @mouseenter="clearTimer"
  @mouseleave="createTimer"
  >
    <div
      class = 'nitification'
      :style = 'style'
      v-show = "visible"
      >
      <span class="content">
        {{ content }}
      </span>
      <a class="btn" @click = 'handleClose'>{{btn}}</a>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  computed: {
    style () {
      return {}
    }
  },
  data () {
    return {
      visible: true
    }
  },
  props: {
    content: {
      type: String,
      dafault: 'hello world'
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    afterLeave () {
      this.$emit('closed')
    },
    afterEnter () {},
    clearTimer () {},
    createTimer () {}
  }
}
</script>

<style>
  .nitification {
    width: 200px;
    height:50px;

    background-color: #009;
    display: flex;
    display: -webkit-flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .content {
    color: #fff;
  }
  .btn {
    background-color: green;
    color: #fff;
  }
</style>
