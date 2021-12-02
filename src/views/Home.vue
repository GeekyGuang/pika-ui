<template>
    <div class="topNavandBanner">
      <Topnav />
      <div class="banner">
          <h1>pika-ui</h1>
          <h2>一个厉害的UI框架</h2>
          <p class="actions">
              <a href="https://github.com">Github</a>
              <router-link to="/doc">开始</router-link>
          </p>
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
@use "sass:math";

.topNavandBanner {
     background: rgb(255,203,20);
     background: linear-gradient(146deg, rgba(255,203,20,1) 0%, rgba(243,174,29,1) 100%);
}
 .banner {
     h1, h2 {
         color: white;
     }
     padding: 100px 0;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     > .actions {
         padding: 8px 0;
         a {
             margin: 0 8px;
             background: #fff;
             display: inline-block;
             $h: 28px;
             height: $h;
             line-height: $h;
             border-radius: math.div($h,2);
             padding: 0 8px;
         }
     }
 }
</style>