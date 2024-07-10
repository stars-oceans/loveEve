<template>
  <div>
    <el-container>
      <el-aside width="250px" style="height: 100vh;">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          style="height: 100vh;"
          @open="handleOpen"
          @close="handleClose"
              @select="handleSelect"
        >
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">美女短视频</span>
          </el-menu-item>
          <el-menu-item index="/girlimg">
            <i class="el-icon-document"></i>
            <span slot="title">美女图片</span>
          </el-menu-item>
          <el-menu-item index="/girlImgluo">
            <i class="el-icon-setting"></i>
            <span slot="title">luo</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- <el-header>Header</el-header> -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeIndex : '/'
    };
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(index, indexPath) {
      this.activeIndex = index; // 更新激活的菜单项
      this.$router.push(index); // 使用 vue-router 导航到相应的路由
    }
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
