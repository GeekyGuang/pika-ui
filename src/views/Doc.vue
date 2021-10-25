<template>
    <div>
        <Topnav />
        <div class="content">
            <aside>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <routerlink to="/doc/switch">Switch组件</routerlink>
                    </li>
                    <li>
                        <routerlink to="/doc/button">Button组件</routerlink>
                    </li>
                    <li>
                        <routerlink to="/doc/dialog">Dialog组件</routerlink>
                    </li>
                    <li>
                        <routerlink to="/doc/tabs">Tabs组件</routerlink>
                    </li>
                </ol>
            </aside>
            <main>主内容</main>
        </div>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {Topnav}
}
</script>
<style lang="scss" scoped>
  aside {
      background: lightblue;
      width: 150px;
      padding: 16px;
      position: fixed;
      top:0;
      left: 0;
      padding-top: 70px;
      > h2 {
          margin-bottom: 4px;
      }
      > ol {
          > li {
              padding: 4px 0;
          }
      }
  }
</style>