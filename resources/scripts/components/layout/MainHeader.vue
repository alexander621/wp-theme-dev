<template>
    <header
        class="header transition-colors  transition ease-in-out duration- duration-150 fixed z-50 w-screen "
        :class="{ 'bg-black': !scrollTop }"
    >
        <div class="flex flex-row justify-between   py-5 mx-10">
            <a :href="$settings.app_url" class="logo self-start font-dosplay font-hairline"
                ><img :src="$settings.logo" :alt="blogName" width="187"
            /></a>

            <nav class=" justify-self-end place-self-center" ref="nav">
                <slot />

                <span
                    ref="underlineThingy"
                    class=" bg-darkMagenta h-1 w-0 absolute mt-3 ml-2"
                ></span>
            </nav>
        </div>
    </header>
</template>
<script>
    import { gsap } from "gsap";

    export default {
        props: {
            blogName: String,
            homepage: String,
        },
        data() {
            return {
                scrollTop: true,
            };
        },
        created() {
            if (this.homepage) {
                this.scrollTop = true;
            } else {
                this.scrollTop = false;
            }
        },
        methods: {
            underlineAnimation() {
                const links = this.$refs.nav.querySelectorAll("li > a");
                const self = this;
                let initialUnderlinePosition = this.$refs.underlineThingy.offsetLeft;
                let initialUnderlineWidth = this.$refs.underlineThingy.offsetWidth;

                for (const link of links) {
                    link.addEventListener("mouseenter", onMouseEnter);
                    link.addEventListener("mouseleave", onMouseLeave);

                    if (link.parentNode.classList.contains("current_page_item")) {
                        initialUnderlinePosition =
                            link.offsetLeft - this.$refs.underlineThingy.offsetLeft;

                        initialUnderlineWidth = link.offsetWidth + "px";

                        const animation = gsap.timeline({});

                        let params = {
                            x: initialUnderlinePosition,
                            width: initialUnderlineWidth,
                            duration: 0.7,
                            ease: "power4.inOut",
                        };

                        animation.to(self.$refs.underlineThingy, params, 0);
                    }
                }

                function onMouseEnter(e) {
                    const animation = gsap.timeline({});
                    let params = {
                        x: e.target.offsetLeft - self.$refs.underlineThingy.offsetLeft,
                        width: e.target.offsetWidth,
                        duration: 0.7,
                        ease: "power4.inOut",
                    };
                    animation.to(self.$refs.underlineThingy, params, 0);
                }

                function onMouseLeave(e) {
                    const animation = gsap.timeline({});

                    let params = {
                        x: initialUnderlinePosition,
                        width: initialUnderlineWidth,
                        duration: 0.7,
                        ease: "power4.inOut",
                    };

                    animation.to(self.$refs.underlineThingy, params, 0);
                }
            },

            isTop(e) {
                if (this.homepage) {
                    if (window.scrollY > window.innerHeight) {
                        this.scrollTop = false;
                    } else {
                        this.scrollTop = true;
                    }
                }
            },
        },
        mounted() {
            setTimeout(() => {
                this.underlineAnimation();
            }, 1000);

            window.addEventListener("scroll", this.isTop);
        },
    };
</script>
<style lang="scss" scoped>
    .nav {
        @apply flex;
        li {
            @apply mx-2;

            &.current_page_item a {
                @apply text-darkMagenta;
            }
        }

        a {
            @apply font-display uppercase font-medium text-white;

            &:active,
            &:hover {
                @apply text-darkMagenta;
            }
        }
    }
</style>
