<template>
    <footer class="main-footer">
        <div class="container mx-auto ">
            <div class="flex">
                <div class="w-1/2">
                    <div class="content-menus">
                        <slot />
                    </div>
                    <div class="content-newsletter mt-20">
                        <h2 class="uppercase text-3xl font-thin tracking-widest inline-block">
                            Join Our Mailing List
                        </h2>
                        <p class="mt-2 font-thin">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
                        </p>
                        <div class="d-flex">
                            <input
                                type="text"
                                placeholder="email"
                                class="bg-white text-black text-md py-3 px-4 mt-10 w-1/2 "
                            />
                            <a href="#" class="bg-darkMagenta text-white py-4 px-20 uppercase w-1/5"
                                >Send</a
                            >
                        </div>
                    </div>
                </div>

                <div class="w-1/2 flex justify-between flex-col">
                    <h2
                        class="border-b-4 border-darkMagenta pb-2 mb-4 uppercase text-2xl inline-block "
                    >
                        Black Freedom Collective
                    </h2>
                    <p class="font-thin">
                        The BFC is a growing network of 19 Black-led organizations in eight states
                        and the District of Columbia, with a geographic focus in the Midwest and the
                        South. Across the differences in the BFC’s organizations, campaigns, and
                        membership, it is united in the shared work of building the power of Black
                        communities in three dimensions: organized people, bold ideas, and political
                        clout.
                    </p>

                    <ul class="mt-20 flex">
                        <li v-if="$settings.fb_url != ''" class="m-1">
                            <a :href="$settings.fb_url">
                                <svg-vue
                                    icon="social.facebook-icon"
                                    alt="facebook"
                                    class="icon"
                                    width="25px"
                                    height="25px"
                                ></svg-vue>
                            </a>
                        </li>
                        <li v-if="$settings.yt_url != ''" class="m-1">
                            <a :href="$settings.yt_url">
                                <svg-vue
                                    icon="social.youtube-icon"
                                    alt="youtube"
                                    class="icon"
                                    width="35px"
                                    height="25px"
                                ></svg-vue>
                            </a>
                        </li>
                        <li v-if="$settings.ig_url != ''" class="m-1">
                            <a :href="$settings.ig_url">
                                <svg-vue
                                    icon="social.instagram-icon"
                                    alt="instagram"
                                    class="icon"
                                    width="26px"
                                    height="26px"
                                ></svg-vue>
                            </a>
                        </li>
                        <li v-if="$settings.in_url != ''" class="m-1">
                            <a :href="$settings.in_url">
                                <svg-vue
                                    icon="social.linkedin-icon"
                                    alt="linkedin"
                                    class="icon"
                                    width="26px"
                                    height="26px"
                                ></svg-vue>
                            </a>
                        </li>
                        <li v-if="$settings.tw_url != ''" class="m-1">
                            <a :href="$settings.tw_url">
                                <svg-vue
                                    icon="social.twitter-icon"
                                    alt="twitter"
                                    class="icon"
                                    width="26px"
                                    height="26px"
                                ></svg-vue>
                            </a>
                        </li>
                        <li v-if="$settings.pi_url != ''" class="m-1">
                            <a :href="$settings.pi_url">
                                <svg-vue
                                    icon="social.pinterest-icon"
                                    alt="pinterest"
                                    class="icon"
                                    width="26px"
                                    height="26px"
                                ></svg-vue>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="w-full flex justify-between items-end pt-10 pb-5">
                <div class="logo-footer p-2">
                    <img :src="$settings.logo_footer" alt="" width="222px" height="59px" />
                </div>
                <p class="text-white">
                    Privacy Policy | Terms & Conditions<br />
                    <span class="designby small" v-html="itsLabel"></span>
                </p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    props:["itsLabel"]
}
</script>
<style lang="scss" scoped>
    .main-footer {
        @apply bg-black text-white pt-16 pb-5;
        .logo-footer {
            background-color:#862666;
        }
        .nav {
            @apply flex;
        }
        .nav >li:not(:first-child) {
            @apply pl-20;
        }
        .nav >li> a {
            @apply text-lg pb-20 font-bold;
        }
    }
</style>
