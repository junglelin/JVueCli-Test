<template lang="pug">
    #footer.footer.card-footer(data-style='1')
        .footer-social
            .footer-nav
                ul.nav-menu
                    li(v-for="item in socialMedia.list")
                        a(:href='item.url' :target='item.target' :title="item.target === '_blank' ? item.name + ' - [另開新視窗]' : item.name ")
                            i(:class="'cc ' + item.fonticon")
        .footer-main
            .footer-custom.logo
                a.logo(:href="logo.url" :title='logo.title' alt='' :style="{'background-image': 'url(' + logo.src + ')'}")
            .footer-nav.right
                .footer-nav.Top.d-none
                    ul.nav-menu
                        li.current-menu
                            a(href='javascript:') 職缺公告
                        li
                            a(href='javascript:') 志工招募
                        li.parent
                            a(href='javascript:') 園區管理要點
                            ul.sub-menu
                                li
                                    a(href='javascript:') 園區管理要點
                                li
                                    a(href='javascript:') 園區管理要點
                                li.parent
                                    a(href='javascript:') 園區管理要點
                                    ul.sub-menu
                                        li
                                            a(href='javascript:') 園區管理要點
                                        li
                                            a(href='javascript:') 園區管理要點
                        li
                            a(href='javascript:') 職缺公告
                        li
                            a(href='javascript:') 志工招募
                
                .footer-custom
                    ul(v-if="nav.length")
                        li(v-for="item in nav")
                            a(:href="item.url" :target="item.target" :title="item.target === '_blank' ? item.name + ' - [另開新視窗]' : item.name ") {{ item.name }} 

                    .custom-content(v-html="customContent")
        .footer-copyright {{ copyright }}
</template>

<script>
import footerAPI from '@/apis/modules/footer.js'

export default {
    data(){
        return{
            copyright: '',
            customContent: '',
            logo: {},
            nav: [],
            socialMedia: []
        }
    },
    created(){
        footerAPI.getFooter().then(res => {
            const data = res.data.footer;
            this.socialMedia = data.socialMedia;
            this.nav = data.nav;
            this.logo = data.logo;
            this.customContent = data.customContent;
            this.copyright = data.copyright;
        });
    }
}
</script>

<style scoped lang="sass">
    @import "@/assets/sass/cards/footer/style1"
</style>