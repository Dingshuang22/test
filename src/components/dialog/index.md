# Dialog Component

## 使用
### main.js
```
import Dialog from '@/components/dialog'
Vue.use(Dialog)
```
### use page
#### 1
```
<dialog-bar :value="value"
type="danger" // defalt(默认一个取消按钮) confirm(确认取消两个按钮) danger(删除取消两个按钮)
title="我是标题"    // 标题
content="我是内容"  // 内容
@cancel="clickCancel()" // 用户点击
@danger="clickDanger()" // 用户点击删除
@confirm="clickConfirm()" // 用户点击确认
dangerText="Delete" // 删除按钮文字
cancelText="Delete" // 取消按钮文字
confirmText="Delete" // 确认按钮文字
></dialog-bar>
```
#### 2
```
this.$dialog({
  type: 'danger',
  title: '我是一个标题',
  content: '确认删除吗?',
  parentclick: this.dialogBtnClick  //  可以对dialog Component button 进行操作
})
```
