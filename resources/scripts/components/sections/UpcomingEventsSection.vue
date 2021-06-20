<template>
    <section class="our-featured-partners-section py-24">
        <div class="container mx-auto relative text-center ">
            <section-heading title="Upcoming Events" colorClass="text-darkMagenta" class=" mb-5" />

            <h4
                class="text-3xl font-thin
            "
            >
                Call for action
            </h4>

            <div class="content-events mt-16 flex">
                <div class="w-1/3 mx-2" v-for="(event, index) in events" :key="index">
                    <a :href="event.detail_url">
                        <img :src="event.image" alt="" class="object-cover w-full" />
                        <div
                            class="bg-darkMagenta flex flex-row justify-between py-2 px-3 border-darkMagenta  border-4 hover:border-white "
                        >
                            <h5 class="uppercase text-white">{{ event.title }}</h5>
                            <p class="text-white">{{ event.start_date }}</p>
                        </div>
                    </a>
                </div>
            </div>

            <a
                href="/event"
                class="bg-black text-white px-24 py-4 uppercase inline-block mt-24 tracking-wider"
                >View All</a
            >
        </div>
    </section>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        data() {
            return {};
        },
        computed: {
            ...mapGetters({
                events: "event/getData",
            }),
        },
        created() {
            this.$store.dispatch("event/fetchData");
        },
    };
</script>
