<template>
    <section class="intro-section h-scre relative bg-black">
        <div class="container mx-auto flex align-end justify-end h-screen z-10 relative">
            <div class="w-1/2 h-screen  flex flex-col justify-end  pb-32 flex-wrap">
                <div class="content-text">
                    <section-heading :title="intro.title" />
                    <p class="text-white mt-8 leading-relaxed text-lg" v-html="intro.description"></p>
                    <transparent-button v-if="intro.button_label && intro.button_url" :text="intro.button_label" :url="intro.button_url" class="mt-8 hover:bg-purple hover:text-black hover:border-black" />
                </div>
            </div>
        </div>
        <img
            class="object-cover absolute top-0 left-0 opacity-50 w-screen h-screen z-0"
            :src="intro.bg"
            alt=""
        />
    </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            intro: "homepage/getIntro",
        }),
    },
}
</script>
<style lang="scss" scoped></style>
