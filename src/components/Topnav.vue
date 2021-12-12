<template>
    <div class="topnav">
        <router-link to="/" class="logo" >
            <svg class="icon">
                <use xlink:href="#icon-pokemon"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <router-link to="/doc">文档</router-link>
        </ul>

        <svg v-if="toggleMenuButtonVisible" class="icon toggleAside" @click="toggleMen">
            <use xlink:href="#icon-menu"></use>
        </svg>
    </div>
</template>
<script lang="ts">
  import { inject, Ref} from 'vue'
  export default {
      props: {
          toggleMenuButtonVisible: {
              type: Boolean,
              default: false
          }
      },
    setup(){
        const menuVisible = inject<Ref<boolean>>('menuVisible')!
        const toggleMen = () => {
            menuVisible.value = !menuVisible.value
        }
        return {toggleMen}
    }
  }
</script>
<style lang="scss" scoped>
  .topnav {
      color: white;
      font-size: 20px;
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       z-index: 10;
       display: flex;
       padding: 16px;
       justify-content: center;
       align-items: center;
       > .logo {
           margin-right: auto;
           > svg {
               width: 32px;
               height: 32px;
           }
       }

       > .menu {
           display: flex;
           white-space: nowrap;
           flex-wrap: nowrap;
           > a {
               margin: 0 1em;
           }
       }

       > .toggleAside {
           width: 24px;
           height: 24px;
           position: absolute;
           left: 16px;
           top: 50%;
           transform: translateY(-50%);
           display: none;
           cursor: pointer;
       }

       @media (max-width: 500px) {
       > .menu{ display: none;}
       > .logo{
           margin:0 auto;
           }

       > .toggleAside {
          display: inline-block;
       }
   }
   }


</style>