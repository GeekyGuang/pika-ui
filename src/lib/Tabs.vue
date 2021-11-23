<template>
    <div class="pika-tabs">
        <div class="pika-tabs-nav" ref="container">
            <div class="pika-tabs-nav-item" 
            v-for="(title,index) in titles"
            :ref="el => { if (el) navItems[index] = el }"
            :class="{selected: title === selected}" 
            :key="index" @click="changeTab(title)">{{title}}</div>
            <div ref="indicator" class="pika-tabs-nav-indicator"></div>
        </div>
        <div class="pika-tabs-content">
            <component class="pika-tabs-content-item"  :is="current" :key="selected"/>
        </div>
    </div>
</template>

<script lang="ts">
import { computed,onMounted,onUpdated, ref } from 'vue'
import Tab from './Tab.vue'
export default {
    props:{
        selected: String
    },
    setup(props,context){
       const defaults = context.slots.default()
       const navItems = ref([])
       const indicator = ref(null)
       const container = ref(null)

       const x = () => {
        const divs = navItems.value
        const result = divs.filter(item => item.classList.contains('selected'))[0]
        const {width, left: left2} = result.getBoundingClientRect()
        indicator.value.style.width = width + 'px'

        const {left: left1} = container.value.getBoundingClientRect()
        indicator.value.style.left = (left2 - left1) + 'px'
       }

       onMounted(x)
       onUpdated(x)

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
           current,
           navItems,
           indicator,
           container
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
        position: relative;

        &-indicator {
            position: absolute;
            height: 3px;
            width: 100px;
            background: $blue;
            left: 0;
            bottom: -1px;
            transition: all 250ms;
        }

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