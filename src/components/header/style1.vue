<template lang="pug">
    #header.header.card-header(data-style='1')
        .wrapper 
            a.logo.normal(href="#!" :title="normalLogo.title" :style="{'background-image': 'url(' + normalLogo.src + ')'}")
            a.logo.shrink(href="#!" :title="shrinkLogo.title" :style="{'background-image': 'url(' + shrinkLogo.src + ')'}")
            a.logo.mobile(href="#!" :title="mobileLogo.title" :style="{'background-image': 'url(' + mobileLogo.src + ')'}")
            .header-content
                .nav
                    ul.lang(v-if="lang.status === true")
                        li(v-for="item in lang.list")
                            a(:href="item.url" :target="item.target" :title="item.name") {{ item.name }}

                    .nav-search(v-if="search.status === true")
                        a(href="javascript:;" title="搜尋") 
                            i.cc.cc-search
                            span.sr-only 搜尋

                    .nav-video
                        a(href="javascript:;" title="影片")
                            i.cc.cc-video
                            span.sr-only 影片

                    .nav-cart
                        a(href="javascript:;" title="購物車")  
                            i.cc.cc-cart-o
                            span.sr-only 購物車

                .menu
                    ul.menu(v-if="menu.length")
                        li(v-for="item in menu")
                            a(:href="item.url" :target="item.target" :title="item.target === '_blank' ? item.name + ' - [另開新視窗]' : item.name") {{ item.name }} 
                    
                    a.menu-button(href="javascript:;" title="MENU")
                        i.cc.cc-list 
                        span MENU
</template>

<script>
/* eslint-disable */
import headerAPI from '@/apis/modules/header.js'
import 'waypoints/lib/noframework.waypoints.min.js';
import '@/assets/js/header/header.js'

export default ({
    data(){
        return{
            lang: {},
            normalLogo: {},
            shrinkLogo: {},
            mobileLogo: {},
            menu: [],
            search: {},
        }
    },
    created(){
        headerAPI.getHeader().then(res => {
            const data = res.data.header;
            this.lang = data.lang;
            this.search = data.search;
            this.normalLogo = data.logo[0];
            this.shrinkLogo = data.logo[1];
            this.mobileLogo = data.logo[2];
            this.menu = data.menu;
        });
    }   
})
</script>

<style scoped lang="sass">
    @import "@/assets/sass/cards/header/style1"
</style>