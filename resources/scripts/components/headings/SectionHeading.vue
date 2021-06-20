<template>
    <h3
        class="text-4xl py-3 px-5 font-black uppercase tracking-wider inline-block"
        :class="[colorClass, bgClass]"
    >
        {{ title }}
    </h3>
</template>
<script>
    export default {
        props: {
            title: String,
            colorClass: {
                type: String,
                default: "text-darkMagenta",
            },
            bgClass: {
                type: String,
                default: "bg-black",
            },
        },
    };
</script>
