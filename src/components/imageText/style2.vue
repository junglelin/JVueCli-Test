<template lang="pug">
    .card-imageText(data-style="2")
        .card.shadow-none
            .card-box
                .card-img
                    .card-img-content.desktop(:style="{'background-image': 'url(' + item.sourceDetail.desktop.jpg + ')'}")
                    .card-img-content.mobile(:style="{'background-image': 'url(' + item.sourceDetail.mobile.jpg + ')'}")
                    .avator
                        .img.desktop(:style="{'background-image': 'url(' + item.sourceDetail.desktop.jpg + ')'}")
                        .img.mobile(:style="{'background-image': 'url(' + item.sourceDetail.mobile.jpg + ')'}")
                    .like
                        a(href="javascript:;", title="like", alt="like")
                            i.cc.cc-favorite-o
                .card-text
                    .card-text-name(v-html="item.title")
                    .date {{ item.date }}
                    .card-text-info
                        .star
                            i.cc.cc-star-full
                            i.cc.cc-star-full
                            i.cc.cc-star-full
                            i.cc.cc-star-full
                            i.cc.cc-star-full.unchosen
                            | (1200)
                    .teacher
                        .title 講師
                        .content {{ item.otherInfo.teacher }}
                    .price {{ item.otherInfo.price }}
                .more
                    a(:href="item.more.url", :target="item.more.target", :title="item.target === '_blank' ? item.title + ' - [另開新視窗]' : item.title ") READ MORE
</template>

<script>
export default ({
    name: 'imageTextStyle2',
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
    @import "@/assets/sass/cards/imageText/style2"
</style>