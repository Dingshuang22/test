/**
 * Index state actions mutations
 */

import { types } from './types/index.js'
import { MessageBox, Message } from 'element-ui'
var _ = require('lodash')

let state = {
  num: 1,
  /**
  * 模仿按钮权限  "查询，重置，导出，审核 拒绝" v-has
  */
  buttons: '查询，重置，导出，审核',
  userInfoPagination: { page: 1, size: 8, total: 21 },
  userInfo: [
    {
      userNum: 1,
      name: '张三',
      company: '上海外服',
      address: '武汉基地',
      flag: 0
    },
    {
      userNum: 2,
      name: '李四',
      company: '上海外服',
      address: '北京基地'
    },
    {
      userNum: 3,
      name: '王五',
      company: '上海外服',
      address: '深圳基地'
    },
    {
      userNum: 4,
      name: '老王',
      company: '上海外服',
      address: '上海基地'
    }, {
      userNum: 5,
      name: '张三',
      company: '上海外服',
      address: '武汉基地'
    },
    {
      userNum: 6,
      name: '李四',
      company: '上海外服',
      address: '北京基地'
    },
    {
      userNum: 7,
      name: '王五',
      company: '上海外服',
      address: '深圳基地'
    },
    {
      userNum: 8,
      name: '老王',
      company: '上海外服',
      address: '上海基地'
    }, {
      userNum: 9,
      name: '张三',
      company: '上海外服',
      address: '武汉基地'
    },
    {
      userNum: 10,
      name: '李四',
      company: '上海外服',
      address: '北京基地'
    },
    {
      userNum: 11,
      name: '王五',
      company: '上海外服',
      address: '深圳基地'
    },
    {
      userNum: 12,
      name: '老王',
      company: '上海外服',
      address: '上海基地'
    }, {
      userNum: 13,
      name: '张三',
      company: '上海外服',
      address: '武汉基地'
    },
    {
      userNum: 14,
      name: '李四',
      company: '上海外服',
      address: '北京基地'
    },
    {
      userNum: 15,
      name: '王五',
      company: '上海外服',
      address: '深圳基地'
    },
    {
      userNum: 16,
      name: '老王',
      company: '上海外服',
      address: '上海基地'
    },
    {
      userNum: 17,
      name: '老王',
      company: '上海外服',
      address: '上海基地'
    }, {
      userNum: 18,
      name: '张三',
      company: '上海外服',
      address: '武汉基地'
    },
    {
      userNum: 19,
      name: '李四',
      company: '上海外服',
      address: '北京基地'
    },
    {
      userNum: 20,
      name: '王五',
      company: '上海外服',
      address: '深圳基地'
    },
    {
      userNum: 21,
      name: '老王',
      company: '上海外服',
      address: '上海基地'
    }
  ]
}

let actions = {

}

let mutations = {
  [types.CHANGEBUTTONS] (state, buttons) {
    // console.log("))))");
    // console.log(state)
    state.buttons = buttons
    // console.log('mutations')
    // console.log(state)
  },

  //    初始化Index tableData checked
  [types.INITCHECKBOX] (state) {
    var userInfo = state.userInfo
    _(userInfo).forEach(item => {
      item.selected = false
      // console.log(item)
    })
  },
  //    Index单条数据切换选中状态
  [types.TOGGLESELECTION] (state, userNum) {
    let idx = _.findIndex(state.userInfo, d => d.userNum === userNum)
    // must exists
    let userInfo = state.userInfo[idx]
    userInfo.selected = !userInfo.selected
    state.userInfo.splice(idx, 1, userInfo)
  },

  // Index全选状态切换
  [types.TOGGLEALLSELECTION] (state) {
    let pg = state.userInfoPagination
    /**
         * 奇葩问题
         * state数据改变 getter不更新
         * 解决办法  先清空state 再给state赋值
         */
    let data = state.userInfo
    state.userInfo = ''
    state.userInfo = data

    let temp = _.slice(state.userInfo, (pg.page - 1) * pg.size, pg.page * pg.size)
    if (_.findIndex(temp, d => d.selected) === -1) {
      temp.forEach(d => d.selected = true)
    } else {
      temp.forEach(d => d.selected = false)
    }
  },

  // 分页点击设置pg
  [types.SETUSERINFOPG] (state, val) {
    state.userInfoPagination = { ...state.userInfoPagination, page: val }
  },

  // 删除单条表格数据
  [types.DELETETABLEDATA] (state, item) {
    console.log(item)
    MessageBox.confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      if (item.selected == true) {
        let idx = _.findIndex(state.userInfo, item)
        state.userInfo.splice(idx, 1)
        Message({
          type: 'success',
          message: '删除成功!'
        })
      } else {
        Message({
          type: 'info',
          message: '你未勾选,无法删除!'
        })
      }
    }).catch(() => {
      Message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }

}

const getters = {
  numGetter: state => {
    console.log(state)
    return state.num + 1
  },
  userInfoList: state => {
    let pg = state.userInfoPagination
    return _.slice(state.userInfo, (pg.page - 1) * pg.size, pg.page * pg.size) // 处理所有数据 分页显示
  },
  allUserInfoSelect: state => {
    let pg = state.userInfoPagination
    // console.log(_.slice(state.userInfo, (pg.page - 1) * pg.size, pg.page * pg.size).filter(p => !p.selected).length === 0)
    return _.slice(state.userInfo, (pg.page - 1) * pg.size, pg.page * pg.size).filter(p => !p.selected).length === 0 // 全选框的值
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
