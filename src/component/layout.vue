<template>
    <router-view class="view"></router-view>
</template>

<script>
export default {
    data: function () {
        return {
        };
    },
    methods: {
    }
};
</script>

<style>
    html, body {
        height: 100%;
    }
</style>

<style scoped>
    .page-container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .centre-container {
        flex: 1;
        display: flex;
    }

    .main-container {
        flex: 1;
        overflow: auto;
        padding: 15px;
    }
</style>
