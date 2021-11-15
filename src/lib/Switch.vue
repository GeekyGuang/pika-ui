<template>
    <button @click="toggle" :class="{checked}"><span></span></button>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
export default {
  setup(){
     const checked = ref(false)
     const toggle = () => {
         checked.value = !checked.value
     }
     return {
         checked, toggle
     }
  }
}

</script>
<style lang="scss" scoped>
  @use "sass:math";
  $h: 22px;
  $h2: $h - 4px;
  button {
      height: $h;
      width: $h*2;
      border: none;
      background: grey;
      border-radius: math.div($h,2);
      position: relative;
  }
  span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: math.div($h2,2);
      transition: left 250ms;
  }
  button:focus {
      outline: none;
  }
  button.checked {
      background: blue;

      & > span {
          left: calc(100% - #{$h2} - 2px)
      }
  }
</style>