<template>
    <div class="layout">
        <Topnav class="nav" toggleMenuButtonVisible/>
        <div class="content" >
            <aside v-if="menuVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">开始使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs组件</router-link>
                    </li>
                </ol>
            </aside>
            <main><router-view /></main> 
        </div>
        
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
import {inject, Ref} from 'vue'
export default {
    components: {Topnav},
    setup() {
       const menuVisible = inject<Ref<boolean>>('menuVisible')!
       return {menuVisible}
    }
}
</script>
<style lang="scss" scoped>
  $black: #2c2f32;
  $nav-bg: #011627;
  $yellow: #fcbd00;
  $heighlight-grey: #efefef;
  .layout {
      display: flex;
      flex-direction: column;
      height: 100vh;
      > .nav {
          flex-shrink: 0;
          color: $yellow;
          background: $nav-bg;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
      }
      > .content {
          flex-grow: 1;
          padding-top: 60px;
          padding-left: 206px;
          @media (max-width: 500px){
              padding-left: 0;
          }
        > aside {
            z-index: 8;
        }
      }
  }
  .content {
      display: flex;
      > aside {
          flex-shrink: 0;
      }
      > main {
          flex-grow: 1;
          padding: 16px;
          background: white;
      }
  }
  aside {
      background: #fcfcfc;
      width: 200px;
      position: fixed;
      top:0;
      left: 0;
      padding-top: 70px;
      height: 100%;
      color: $black;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
      > h2 {
          margin-bottom: 4px;
          padding: 0 16px;

          &:nth-of-type(2) {
              margin-top: 16px;
          }
      }
      > ol {
          li {
              margin-bottom: 4px;
          }
          a {
              padding: 8px 32px;
              display: block;

              &:hover {
                  background: $heighlight-grey;
              }
          }

          .router-link-active {
              color: #011627;
              background: $heighlight-grey;
              position: relative;
                &::after {
                    content: "";
                    display: block;
                    animation: bdrolate 800ms;
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 3px;
                    height: 100%;
                    background-color: $yellow;
                }

             @keyframes bdrolate {
                0% {
                transform: rotateX(90deg);
                }
                100% {
                transform: rotateX(0deg);
                }
            }
        }

          }
      }
  
  main {
      overflow: auto;
  }
</style>