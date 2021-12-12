<template>
    <div class="topNavandBanner">
      <Topnav />
      <div class="banner">
          <h1>Pika-UI</h1>
          <h2>一个面向学习者的极简UI框架</h2>
          <p class="actions">
              <a href="https://github.com">Github</a>
              <router-link to="/doc">开始</router-link>
          </p>
      </div>

    </div>
    <div class="features">
        <ul>
        <li>
            <svg class="icon">
                <use xlink:href="#icon-vue"></use>
            </svg>
            <h3>基于 Vue 3</h3>
            <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
            <svg class="icon">
                <use xlink:href="#icon-ts"></use>
            </svg>
            <h3>基于 TypeScript </h3>
            <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
            <svg class="icon">
                <use xlink:href="#icon-light"></use>
            </svg>
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁</p>
        </li>
</ul>


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
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
.topNavandBanner {
     background: rgb(255,203,20);
     background: linear-gradient(146deg, rgba(255,203,20,1) 0%, rgba(243,174,29,1) 100%);
     clip-path: ellipse(80% 60% at 50% 40%);
}
 .banner {
     h1 {
         font-size: 48px;
         font-weight: 500;
     }
     h2 {
         font-size: 36px;
         margin-bottom: 10px;
     }
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
             color: #a0fefd;
             margin: 0 8px;
             background: #3a7dcd;
             display: inline-block;
             
             border: 2px solid #77cdfa;
             border-radius: 4px;
             padding: 8px 24px;

             &:hover {
                 box-shadow: 0 1px 3px rgba(0,0,0,0.25);
             }

         }
     }
 }
</style>