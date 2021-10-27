<template>
    <div>
      <Switch />
    </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
export default {
    setup(){
        console.log("switch")
    },
    components: {Switch}
}
</script>