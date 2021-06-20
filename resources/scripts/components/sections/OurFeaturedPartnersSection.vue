<template>
    <section class="our-featured-partners-section overflow-hidden">
        <div class="container mx-auto relative text-center">
            <section-heading
                title="Our Featured Partners"
                colorClass="text-white"
                class="mt-32 mb-10"
            />

            <div class="content-slider">
                <carousel 
                    :perPage="5" 
                    :navigationEnabled="true" 
                    :paginationEnabled="false"
                    navigationNextLabel='<svg class="h-20 w-20 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/> </svg>'
                    navigationPrevLabel='<svg class="h-20 w-20 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/> </svg>'
                >
                    <slide v-for="(slide, index) in partners" :key="index" class="flex items-center">
                        <a :href="slide.website_url" :alt="slide.title">
                            <img :src="slide.image" class="m-2" width="300px" />
                        </a>
                    </slide>
                </carousel>
            </div>
        </div>
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
                partners: "homepage/getPartner",
            }),
        },
        created() {
            this.$store.dispatch("homepage/fetchPartner");
        },
    };
</script>
