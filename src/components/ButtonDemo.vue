<template>
    <div>
        <Button @click="handleClick">你好</Button>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    },
    setup(){
        const handleClick=()=>{
            console.log('hello')
        }

        return {
            handleClick
        }
    }
}
</script>