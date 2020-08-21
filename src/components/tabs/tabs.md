# Tabs Component

## 使用方法
> ### main.js 引入Tabs from index.js  Vue.use(Tabs)
```
import Tabs from '@/components/tabs'
Vue.use(Tabs)
```

## 使用模板
```
<tabs :value="tabValue" @change="handleChangeTab">
  <tab label="tab1" index="1">
    <span>{{valInp}}</span>
  </tab>
  <tab index="2">
    <span slot="label" style="color:red;">tab2</span>
    <span>tab_content_2</span>
  </tab>
  <tab label="tab3" index="3">
    <span>tab_content_3</span>
  </tab>
</tabs>
```

## eg valInp 不要动态去进行更新操作 暂时没解决

## 使用时 Tab.vue 中删除掉一个content就好

## 未完待续
