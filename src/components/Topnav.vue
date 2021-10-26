<template>
    <div class="topnav">
        <div class="logo" @click="toggleMen">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside"></span>
    </div>
</template>
<script lang="ts">
  import { inject, Ref} from 'vue'
  export default {
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
       background: pink;
       position: relative;
       z-index: 10;
       display: flex;
       padding: 16px;
       justify-content: center;
       align-items: center;
       > .logo {
           min-width: 6em;
           margin-right: auto;
       }

       > .menu {
           display: flex;
           white-space: nowrap;
           flex-wrap: nowrap;
           > li {
               margin: 0 1em;
           }
       }
       
       @media (max-width: 500px) {
       > .menu{ display: none;}
       > .logo{margin:0 auto}
   }
   }


</style>