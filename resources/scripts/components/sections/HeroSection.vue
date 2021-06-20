<template>
    <section ref="heroSection" class="hero-section h-screen">
        <div
            class="z-10 overlay-heading absolute w-full h-screen flex flex-col justify-center items-center"
            ref="title"
        >
            <h1
                class="text-7xl font-black text-white uppercase text-center  leading-tight tracking-wider"
                v-html="hero.title"
            ></h1>
            <h2 class="text-white text-2xl uppercase tracking-widest mt-4">
                {{ hero.tagline }}
            </h2>
        </div>

        <span class="image-overlay"></span>
        <img ref="image" :src="hero.bg" class="hero-background" />
    </section>
</template>
<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { mapGetters } from "vuex";

    gsap.registerPlugin(ScrollTrigger);
    export default {
        props: ["pageId"],
        created() {
            let formData = new FormData();
            formData.append("page_id", this.pageId);
            this.$store.dispatch("homepage/fetchData", formData);
        },
        computed: {
            ...mapGetters({
                hero: "homepage/getHero",
            }),
        },
        mounted() {
            gsap.to(this.$refs.image, {
                y: 200,
                ease: "none",
                scrollTrigger: {
                    trigger: this.$refs.heroSection,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
            gsap.to(this.$refs.title, {
                y: 200,
                ease: "none",
                scrollTrigger: {
                    trigger: this.$refs.heroSection,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        },
    };
</script>
<style lang="scss" scoped>
    .hero-background {
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        z-index: -1;
    }

    .image-overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        background: transparent linear-gradient(180deg, #cc7e2f 0%, #91219a 100%) 0% 0% no-repeat
            padding-box;
        opacity: 0.56;
        z-index: 1;
    }
</style>
