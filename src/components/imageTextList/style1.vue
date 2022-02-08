<template lang="pug">
    .card-partner
        .title-box 
            .title-main {{ partner.title }}
        .swiper-container
            .swiper-wrapper
                .swiper-slide(v-for="item in partner.list")
                    imageTextStyle1(:item="item")
        a.swiper-button-next
        a.swiper-button-prev
</template>

<script>
/* eslint-disable */
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import Swiper from '@/assets/js/swiper/swiper7.min.js'
import imageTextStyle1 from "../imageText/style1";
import imageTextListAPI from '@/apis/modules/imageTextList.js'

export default ({
    components: {
        imageTextStyle1
    },
    data() {
        return {
            partner: {}
        }
    },
    methods: {
        initSwiper: function() {
            new Swiper('.card-partner .swiper-container', {
                loop: true,
                navigation: {
                    nextEl: ".card-partner .swiper-button-next",
                    prevEl: ".card-partner .swiper-button-prev"
                },
                pagination: {
                    el: ".card-partner .swiper-pagination",
                    clickable: true
                },
                centeredSlides: true,
                spaceBetween: 0,
                slideToClickedSlide:true,
                slidesPerView: 1,
                speed: 800,
                breakpoints: { 
                    580: {
                        slidesPerView: 2,
                    },
                    800: { 
                        slidesPerView: 3,
                    },
                    1179: {
                        slidesPerView: 5,
                    }
                }
            })

            var SwiperH = $(".swiper-container").outerHeight();
            $('.swiper-slide').css('height',SwiperH);

            $('.swiper-button-next, .swiper-button-prev').attr({"aria-disabled": "false", "tabindex": "0"})

            //  $(".openImg").colorbox({
            //     rel: 'group1',
            //     maxWidth: "90%",
            //     maxHeight: "90%",
            //     closeButton: true
            // });
            // jwplayer.key = "nhiOPfA7yJAHwyrsZGWUpHznZdnqbTuIdPk4xA=="

        },
        async fetchImageTextList () {
            try {
                const { data } = await imageTextListAPI.getImageTextList1()
                this.partner = data.imagetext
            } catch(error) {
                console.log(error)
            }
        },
    },
    created() {
        this.fetchImageTextList()
    },
    updated () {
        this.initSwiper()
    }
})
</script>

<style scoped lang="sass">
    @import "@/assets/sass/cards/imageTextList/style1"
</style>
