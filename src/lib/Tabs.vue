<template>
    <div>Tabs组件</div>
    <div v-for="title in titles" :key="title">{{title}}</div>
    <component v-for="(tab,index) of defaults" :is="tab" :key="index"/>
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

       const titles = defaults.map(tab => tab.props.title)
       return {
           defaults,
           titles
       }
    }
}
</script>