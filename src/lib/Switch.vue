<template>
    <button @click="toggle" :class="{checked:value}"><span></span></button>
</template>

<script lang="ts">
export default {
    props: {
        value: Boolean
    },
  setup(props: { value: any }, context: { emit: (arg0: string, arg1: boolean) => void }){
     const toggle = () => {
         context.emit('update:value', !props.value)
     }
     return {
         toggle
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
      background: #bfbfbf;
      border-radius: math.div($h,2);
      position: relative;

    &:focus {
      outline: none;
      }
    &.checked {
      background: #1890ff;

      & > span {
          left: calc(100% - #{$h2} - 2px)
      }
    }
    &:active {
      > span {
          width: $h2 + 4px;
      }
    }

    &.checked:active {
      > span {
          width: $h2 + 4px;
          margin-left: -4px;
      }
    }
  }
  span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: math.div($h2,2);
      transition: all 250ms;
  }

</style>