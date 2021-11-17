<template>
    <h1>示例1</h1>
    <div>
        <Button>你好</Button>
        <Button theme="button">普通按钮</Button>
        <Button theme="link">链接按钮</Button>
        <Button theme="text">文字按钮</Button>
    </div>
    <h1>示例2</h1>
    <div>
        <div>
            <Button size="big">大按钮</Button>
            <Button>普通按钮</Button>
            <Button size="small">小小小</Button>
        </div>
        <div>
            <Button theme="link" size="big">大链接按钮</Button>
            <Button theme="link">普通链接按钮</Button>
            <Button theme="link" size="small">小链接按钮</Button>
        </div>
        <div>
            <Button theme="text" size="big">大文字按钮</Button>
            <Button theme="text">普通文字按钮</Button>
            <Button theme="text" size="small">小文字按钮</Button>
        </div>
    </div>
    <h1>示例3</h1>
    <div>
        <div>
            <Button level="main" size="big">主要按钮</Button>
            <Button>普通按钮</Button>
            <Button level="danger" size="small">危险按钮</Button>
        </div>
        <div>
            <Button theme="link" size="big" level="main">主要链接按钮</Button>
            <Button theme="link">普通链接按钮</Button>
            <Button theme="link" size="small" level="danger">危险链接按钮</Button>
        </div>
        <div>
            <Button theme="text" size="big" level="main">主要文字按钮</Button>
            <Button theme="text">普通文字按钮</Button>
            <Button theme="text" size="small" level="danger">危险文字按钮</Button>
        </div>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    },
    setup(){
    }
}
</script>