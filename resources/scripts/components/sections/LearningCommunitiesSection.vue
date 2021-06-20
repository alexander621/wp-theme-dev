<template>
    <section class="learning-communities-section">
        <div class="container mx-auto   mb-20">
            <div class="w-full text-center py-16 mt-10">
                <section-heading :title="communities.title" colorClass="text-darkGreen" />
                <p class="mt-10 w-3/5 mx-auto" v-html="communities.description"></p>
            </div>
            <div class="content-grid flex" v-for="(row, index) in communities.images" :key="index">
                <div class="grid-box" :class="'w-'+item.column" v-for="(item, index2) in row.images_section" :key="index+''+index2">
                    <img
                        :src="item.background_image"
                        alt=""
                        class="grid-image"
                    />
                    <div class="grid-overlay bg-color" :style="{'background-color': bgColor(item.background_color)}">
                        <a :href="item.link"
                            class="h1 uppercase py-2 px-10 bg-black text-white inline-flex text-lg text-center font-black tracking-wider"
                        >
                            {{ item.title }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    methods: {
        bgColor(bgcolor) {
            let rgbcolor = `rgba(${this.hexToRgb(bgcolor)}, .5)`;
            return rgbcolor;
        }
    },
    computed: {
        ...mapGetters({
            communities: "homepage/getCommunity",
        }),
    },
}
</script>
<style lang="scss" scoped>
    .grid-box {
        @apply m-2 bg-black flex relative overflow-hidden border-8 border-black;

        &:hover {
            .grid-image {
                transform: scale(1.05);
            }
        }
    }
    .grid-image {
        @apply w-full h-full  object-cover block transition-transform duration-1000 ease-in-out;
        height: 331px;
    }

    .grid-overlay {
        @apply absolute flex flex-row justify-center items-center  bottom-0 top-0 left-0 right-0;
    }
</style>
