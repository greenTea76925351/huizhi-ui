<template>
    <div id="app">
        <div class="row">
            <hz-button @click="clickme">按钮</hz-button>
            <hz-button type="primary">按钮</hz-button>
            <hz-button type="success">按钮</hz-button>
            <hz-button type="info">按钮</hz-button>
            <hz-button type="warning">按钮</hz-button>
            <hz-button type="danger">按钮</hz-button>
        </div>
        <div class="row">
            <hz-button plain>按钮</hz-button>
            <hz-button plain type="primary">按钮</hz-button>
            <hz-button plain type="success">按钮</hz-button>
            <hz-button plain type="info">按钮</hz-button>
            <hz-button plain type="warning">按钮</hz-button>
            <hz-button plain type="danger">按钮</hz-button>
        </div>
        <div class="row">
            <hz-button round plain>按钮</hz-button>
            <hz-button round plain type="primary">按钮</hz-button>
            <hz-button round plain type="success">按钮</hz-button>
            <hz-button round plain type="info">按钮</hz-button>
            <hz-button round plain type="warning">按钮</hz-button>
            <hz-button round plain type="danger">按钮</hz-button>
        </div>
        <div class="row">
            <hz-button circle plain>图</hz-button>
            <hz-button circle plain type="primary">图</hz-button>
            <hz-button circle plain type="success">图</hz-button>
            <hz-button circle plain type="info">图</hz-button>
            <hz-button circle plain type="warning">图</hz-button>
            <hz-button circle plain type="danger">图</hz-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    methods: {
        clickme () {
            console.log('你点到老子了')
        }
    }
}
</script>
<style lang="less" scoped>
.row{
    margin-bottom: 20px;
    .hz-button{
        margin-right: 20px;
    }
}
</style>
