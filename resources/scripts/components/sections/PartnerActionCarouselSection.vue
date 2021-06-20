<template>
    <section class="content-slider partner-action-galery-section h-screen overflow-hidden">
        <carousel 
        :perPage="1"
        :navigationEnabled="true" 
        :paginationEnabled="false"
        navigationNextLabel='<svg class="h-20 w-20 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/> </svg>'
        navigationPrevLabel='<svg class="h-20 w-20 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/> </svg>'
                
        >
            <slide class="h-screen" v-for="(slide, index) in slides" :key="index">
                <div
                    class="container mx-auto flex align-start justify-start h-screen z-10 relative"
                >
                    <div
                        class="w-1/2 h-screen flex flex-col justify-end  pb-32 flex-wrap text-darkOrange"
                    >
                        <div class="content-text">
                            <section-heading :title="slide.title" colorClass="text-orange" />

                            <p class="text-white mt-8 leading-relaxed text-lg">
                                {{ slide.content }}
                            </p>

                            <transparent-button
                                text="Learn More"
                                class="mt-8 hover:bg-darkOrange hover:text-black hover:border-black"
                            />
                        </div>
                    </div>
                </div>
                <img
                    :src="slide.image"
                    :alt="slide.title"
                    class="object-cover absolute top-0 left-0  w-screen h-screen z-0"
                />
            </slide>
        </carousel>
    </section>
</template>
<script>
    import { Carousel, Slide } from "vue-carousel";
    import { mapGetters } from "vuex";
    export default {
        components: {
            Carousel,
            Slide,
        },
        computed: {
            ...mapGetters({
                slides: "homepage/getSlider",
            }),
        },
        created() {
            this.$store.dispatch("homepage/fetchSlider");
        },
    };
</script>

<style lang="scss">
    .partner-action-galery-section {
        .VueCarousel-slide {
            @apply relative; 
        }
        .VueCarousel-navigation {
            @apply absolute w-full h-full;
            z-index: 9999;

            .VueCarousel-navigation-prev {
                left: 100px;
            }

            .VueCarousel-navigation-next {
                right: 100px;
            }
        }
    }
</style>
