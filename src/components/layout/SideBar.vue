<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.children">
                    <!-- 有子菜单的一级菜单 -->
                    <el-submenu :index="item.name" :key="item.name">
                        <template slot="title">
                            <i :class="item.meta.icon"></i>
                            <span slot="title">{{$t(item.meta.title) }}</span>
                        </template>
                        <template v-for="subItem in item.children">
                            <!-- 有子菜单的二级菜单 -->
                            <el-submenu
                                v-if="subItem.children"
                                :index="subItem.name"
                                :key="subItem.name"
                            >
                                <template slot="title">{{ $t(subItem.meta.title) }}</template>
                                <!-- 三级菜单 -->
                                <el-menu-item
                                    v-for="threeItem in subItem.children"
                                    :key="threeItem.name"
                                    :index="threeItem.name"
                                >{{ $t(threeItem.meta.title) }}</el-menu-item>
                            </el-submenu>
                            <!-- 无子菜单的二级菜单 -->
                            <el-menu-item
                                v-else
                                :index="subItem.name"
                                :key="subItem.name"
                            >{{ $t(subItem.meta.title) }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <!-- 无子菜单的一级菜单 -->
                <template v-else>
                    <el-menu-item :index="item.name" :key="item.name">
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{$t(item.meta.title) }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import {bus} from '@/export';
import { routes } from '@/router/child'
export default {
    name:'SideBar',
    data() {
        return {
            collapse: false,
            items: routes
     
        }
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
