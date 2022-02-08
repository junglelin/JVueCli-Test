<template lang="pug">
    .card-imageTextList(data-style='2')
        .title-box
            .title {{ title }}
        .tab.for-pc
            ul
                li.active
                    a(href='#' title="平日課") 平日課
                li
                    a(href='#' title="假日課") 假日課
                li
                    a(href='#' title="攝影") 攝影
                li
                    a(href='#' title="行銷") 行銷
                li
                    a(href='#' title="投資理財") 投資理財
                li
                    a(href='#' title="職場技能") 職場技能
                li
                    a(href='#' title="生活品味") 生活品味
                li
                    a(href='#' title="藝術設計") 藝術設計
        .swiper-container.swiper-for-pc
            .swiper-wrapper
                .swiper-slide(v-for="item in list")
                    imageTextStyle2(:item="item")
                    
            .swiper-pagination(data-style='2')
            
            .pc-controller
                .swiper-button-next
                .swiper-button-prev
</template>

<script>
/* eslint-disable */
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import Swiper from '@/assets/js/swiper/swiper7.min.js'
import imageTextStyle2 from "../imageText/style2";
import imageTextListAPI from '@/apis/modules/imageTextList.js'

export default ({
    components: {
        imageTextStyle2
    },
    data() {
        return{
            list: [],
            more: {},
            title: ''
        }
    },
    methods: {
        initSwiper: function() {
           new Swiper('.card-imageTextList[data-style="2"] .swiper-container', {
                centeredSlides: true,
                pagination: {   
                    el: ".swiper-pagination[data-style='2']",
                    type: "bullets",
                    clickable: true,
                },
                speed: 800,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: '.card-imageTextList[data-style="2"] .swiper-button-next',
                    prevEl: '.card-imageTextList[data-style="2"] .swiper-button-prev',
                    disabledClass: "disabled"
                },
                loop: true,
            });

        },
        async fetchImageTextList () {
            try {
                const { data } = await imageTextListAPI.getImageTextList2()
                this.list = data.event.list;
                this.more = data.event.more;
                this.title = data.event.title;
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
    @import "@/assets/sass/cards/imageTextList/style2"
</style>
