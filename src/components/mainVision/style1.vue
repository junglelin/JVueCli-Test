<template lang="pug">
    #main-vision.card-mainVision(data-style="2")
        .wrapper
            .swiper-container
                .swiper-wrapper
                    .swiper-slide.banner-content(v-for="item in detail" :style="{'background-image': 'url(' + item.sourceDetail.desktop.jpg + ')'}")
                        h2.title {{ item. title }}
                        p.text {{ item.desc }}
                        a.btn.join-btn(href="javascript:;" title="加入我們") 加入我們

                    .swiper-slide.banner-content(style="background-image: url('https://picsum.photos/1400/600/?blur=1')")
                        h2.title 加入我們
                        p.text 加入我們
                        a.btn.join-btn(href="javascript:;" title="加入我們") 加入我們

                a.scroll(href="javascript:;" title="移動到下方" @click="moveDown()")
                    span SCROLL
                    img(src="@/assets/images/down-arrow.png", alt="箭頭按鈕的圖片")
</template>
<script>
/* eslint-disable */
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import Swiper from '@/assets/js/swiper/swiper7.min.js'
import mainVisionAPI from '@/apis/modules/mainVision.js'

export default ({
    data(){
        return{
            loop: '',
            pagination: '',
            detail: []
        }
    },
    methods: {
        async fetchMainVision() {
            try {
                const response = await mainVisionAPI.getMainVision()
                const data = response.data.mainvision
                this.loop = data.loop
                this.pagination = data.pagination
                this.detail = data.detail
            } catch(error) {
                console.log(error)
            }
        },
        initSwiper: function() {
            var self = this
            new Swiper(".card-mainVision .swiper-container", {
                slidesPerView: 'auto',
                allowTouchMove: true,
                spaceBetween: 0,
                pagination: self.pagination,
                loop: self.loop,
                speed: 800,
            })
        },
        moveDown(){
            $('html,body').animate({
                scrollTop: $('.card-html[data-style="2"]').offset().top
            }, 'slow')
        }
    },
    created(){
        this.fetchMainVision()
    },
    updated(){
        this.initSwiper()
    }
})
</script>

<style scoped lang="sass">
    @import "@/assets/sass/cards/mainVision/style1"
</style>