<template>
    <a :href="url" class="border-white border border-2 py-3 px-16 text-white text-lg inline-block">{{
        text
    }}</a>
</template>
<script>
    export default {
        props: {
            text: String,
            url: String,
        },
    };
</script>
<style lang="scss" scoped></style>
