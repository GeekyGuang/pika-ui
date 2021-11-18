<template>
    <div class="pika-tabs">
        <div class="pika-tabs-nav" >
            <div class="pika-tabs-nav-item" :class="{selected: title === selected}" v-for="title in titles" :key="title" @click="changeTab(title)">{{title}}</div>
        </div>
        <div class="pika-tabs-content">
            <component class="pika-tabs-content-item"  :is="current" :key="selected"/>
        </div>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import Tab from './Tab.vue'
export default {
    props:{
        selected: String
    },
    setup(props,context){
       const defaults = context.slots.default()
       defaults.forEach(tag => {
           if(tag.type !== Tab) {
             throw new Error('Tabs的子标签必须为Tab')
         }
       })

       const changeTab = (value) => {
          context.emit('update:selected', value)
       }

       const titles = defaults.map(tab => tab.props.title)
       const current = computed(() => defaults.find(item => item.props.title === props.selected))

       return {
           defaults,
           titles,
           changeTab,
           current
       }
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.pika-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>