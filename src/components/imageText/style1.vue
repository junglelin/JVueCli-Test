<template lang="pug">
    div
        //- 搭配圖組
        .card-imageText_aecc(v-if="item.type == 'image'")
            .card.shadow-none
                .card-box
                    .card-img.original
                        a.openImg(:href="item.url" :target="item.target" :title="item.title + (item.target == '_blank'? ' - [另開新視窗]' : ' - 連結')")
                            .img-box
                                .img-info
                                    picture.desktop
                                        source(:srcset="item.sourceDetail.desktop.webp" :alt="item.title")
                                        img(:src="item.sourceDetail.desktop.jpg" :alt="item.title")

                                    picture.mobile
                                        source(:srcset="item.sourceDetail.mobile.webp" :alt="item.title")
                                        img(:src="item.sourceDetail.mobile.jpg" :alt="item.title")
                                .card-text
                                    .card-text-name {{ item.title }}
                                    .card-text-info 內文內文內文內文內文內文內文內文內文內文內文內文
        //- 搭配圖組 END

        //- 搭配影片 (不是自行上傳的) 燈箱
        .card-imageText(v-if="item.type == 'embed'")
            .card.shadow-none
                .card-box
                    .card-img.original
                        a.openVideo(href='https://www.youtube.com/embed/09R8_2nJtjg?rel=0&amp;controls=0')
                            .img-box
                                .img-info
                                    img(src='<%= SysHelp.GetURL() %>images/temp/263413.jpg' alt='')
                        .card-text
                            .card-text-name 標題標題標題標題
                            .card-text-info 內文內文內文內文內文內文
        //- 搭配影片 (不是自行上傳的) 燈箱 END

        //- 搭配影片 檔案下載 連結 另開
        .card-imageText(v-if="item.type == 'uploaded'")
            .card.shadow-none
                .card-box
                    .card-img.original
                        a(href='https://www.facebook.com/taisounds/')
                            .img-box
                                .img-info
                                    img(src='<%= SysHelp.GetURL() %>images/temp/263413.jpg' alt='')
                        .card-text
                            //- <div class="card-text-kind">故事</div>
                            .card-text-name
                                a(href='#') Title
                            .card-text-info 只有最舒服的活動和廣告方式，能真正與消費者溝通。
        //- 搭配影片 檔案下載 連結 另開 END

        //- 搭配影片 (自行上傳) 燈箱
        .card-imageText(v-if="item.type == 'uploaded'")
            .card.shadow-none
                .card-box
                    .card-img.original
                        a.openJWPlayer(data-id='movie_player' data-file='<%= SysHelp.GetURL() %>images/temp/myVideo.mp4' data-image='<%= SysHelp.GetURL() %>Websites/taisounds/images/808_d9ce4438bcd4138eb9fc679db9e7bc41a3c65c2974270fd093ee8a9bf8ae7d0b.png')
                            .img-box
                                .img-info
                                    img(src='<%= SysHelp.GetURL() %>images/temp/263413.jpg' alt='')
                        .card-text
                            .card-text-name 標題標題標題標題
                            .card-text-info 內文內文內文內文內文內文
        //- 搭配影片 (自行上傳) 燈箱 END

        //- 搭配聲音
        .card-imageText(v-if="item.type == 'voice'")
            .card.shadow-none
                .card-box
                    .card-img.original
                        a.openVoice(data-id='voice_player' data-voice='<%= SysHelp.GetURL() %>images/temp/BraveShine.mp3')
                            .img-box
                                .img-info
                                    img(src='<%= SysHelp.GetURL() %>images/temp/263413.jpg' alt='')
                        .card-text
                            .card-text-name 標題標題標題標題
                            .card-text-info 內文內文內文內文內文內文
        //- 搭配聲音 END
</template>

<script>

export default ({
    name: 'imageTextStyle1',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
})
</script>
<style scoped lang="sass">
    @import "@/assets/sass/card"
    @import "@/assets/sass/cards/imageText/style1"
</style>

