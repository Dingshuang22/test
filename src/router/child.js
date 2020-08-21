// 直接在这里面写routes配置自动更新
// routes i18n 配置如下 使用时 {{ $t(item) }}
export const routes = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: {title: 'i18n.dashboard', icon: 'el-icon-s-home'}
  }, {
    path: 'basetable',
    name: 'basetable',
    component: () => import('@/views/BaseTable.vue'),
    meta: {title: 'i18n.baseTable', icon: 'el-icon-menu'}
  }, {
    path: 'tabs',
    name: 'tabs',
    component: () => import('@/views/Tabs.vue'),
    meta: {title: 'i18n.tabControl', icon: 'el-icon-document-copy'}
  },
  {
    path: 'formrelated',
    name: 'formrelated',
    component: () => import('@/views/FormRelated.vue'),
    meta: {title: 'i18n.formrelated', icon: 'el-icon-date'},
    children: [
      {
        path: 'baseform',
        name: 'baseform',
        component: () => import('@/views/BaseForm.vue'),
        meta: {title: 'i18n.baseform'}
      }, {
        path: 'levelthreemenu',
        name: 'levelthreemenu',
        component: () => import('@/views/LevelThreeMenu.vue'),
        meta: {title: 'i18n.threeMenu'},
        children: [
          {
            path: 'editor',
            name: 'editor',
            component: () => import('@/views/Editor.vue'),
            meta: {title: 'i18n.richEditor'}
          }, {
            path: 'markdowneditor',
            name: 'markdowneditor',
            component: () => import('@/views/MarkDownEditor.vue'),
            meta: {title: 'i18n.markDownEditor'}
          }
        ]
      }, {
        path: 'fileupload',
        name: 'fileupload',
        component: () => import('@/views/FileUpload.vue'),
        meta: {title: 'i18n.fileUpload'}
      }
    ]
  }, {
    path: 'userdefinedicon',
    name: 'userdefinedicon',
    component: () => import('@/views/UserDefinedIcon.vue'),
    meta: {title: 'i18n.userdefinedicon', icon: 'el-icon-s-grid'}
  }, {
    path: 'basechart',
    name: 'basechart',
    component: () => import('@/views/BaseChart.vue'),
    meta: {title: 'i18n.chart', icon: 'el-icon-pie-chart'}
  }, {
    path: 'dragmodule',
    name: 'dragmodule',
    component: () => import('@/views/DragModule.vue'),
    meta: {title: 'i18n.dragModule', icon: 'el-icon-rank'},
    children: [
      {
        path: 'draglist',
        name: 'draglist',
        component: () => import('@/views/DragList.vue'),
        meta: {title: 'i18n.dragList'}
      }, {
        path: 'dragdialog',
        name: 'dragdialog',
        component: () => import('@/views/DragDialog.vue'),
        meta: {title: 'i18n.dragDialog'}
      }
    ]
  }, {
    path: 'vueI18n',
    name: 'vueI18n',
    component: () => import('@/views/I18n.vue'),
    meta: {title: 'i18n.internationFunction', icon: 'el-icon-picture-outline-round'}
  }, {
    path: 'errorhanding',
    name: 'errorhanding',
    component: () => import('@/views/ErrorHanding.vue'),
    meta: {title: 'i18n.errorHanding', icon: 'el-icon-warning'},
    children: [
      {
        path: 'permission',
        name: 'permission',
        component: () => import('@/views/Permission.vue'),
        meta: {title: 'i18n.permissionTest', permission: true}
      }, {
        path: '403',
        name: '403',
        component: () => import('@/views/403.vue'),
        meta: {title: '403'}
      }, {
        path: '404',
        name: '404',
        component: () => import('@/views/404.vue'),
        meta: {title: '404'}
      }
    ]
  },
  {
    path: 'excel',
    name: 'excel',
    component: () => import('@/views/Excel.vue'),
    meta: {title: 'i18n.excel', icon: 'el-icon-s-data'}
  },
  {
    path: 'permissionbutton',
    name: 'permissionbutton',
    component: () => import('@/views/PermissionButton.vue'),
    meta: {title: 'i18n.permissionButton', icon: 'el-icon-lock'}
  },
  {
    path: 'userdefinedcomponent',
    name: 'userdefinedcomponent',
    component: () => import('@/views/UserDefinedComponent.vue'),
    meta: {title: 'i18n.userdefinedcomponent', icon: 'el-icon-s-home'}
  }
]
