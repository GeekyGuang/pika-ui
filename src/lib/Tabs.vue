<template>
    <div>Tabs组件</div>
    <component :is="defaults[0]"/>
    <component :is="defaults[1]"/>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
    setup(props,context){
       const defaults = context.slots.default()
       defaults.forEach(tag => {
           if(tag.type !== Tab) {
             throw new Error('Tabs的子标签必须为Tab')
         }
       })
       return {
           defaults
       }
    }
}
</script>