
<script>
import TabContainer from './TabContainer'
export default {
  name: 'Tabs',
  components: {
    TabContainer
  },
  props: {
    value: {
      type: [Number, String],
      require: true
    }
  },
  data () {
    return {
      panes: []
    }
  },
  methods: {
    onChange (index) {
      this.$emit('change', index)
    }
  },
  render () {
    const contents = this.panes.map(pane => {
      return pane.active ? pane.$slots.default : null
    })
    /**
     * 拆分组件 props 数据直接不更新 tab-container
     * 不拆分 更新慢一拍
     * tabs 下tab的 content 只要不是动态更新暂时没有问题
     */
    return (
      <div class='tabs'>
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
        <tab-container panes={this.panes} />
        <div class="tab-content">
          {contents}
        </div>
      </div>
    )
  }

}
</script>

<style>
  .tabs{
    width:100%;
    height:200px;
  }
  .tabs-header{
    width:100%;
    height:40px;
    border-bottom: 2px solid #f5f5f5;
  }
</style>
