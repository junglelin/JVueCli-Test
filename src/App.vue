<template lang="pug">
    div#app
      //- a(href="#main-content" id="gotocenter" title="跳到主要內容區" tabindex="0" class="skip-main") 跳到主要內容區
      //- #nav
      //-   router-link(to="/") Home
      //-   | |
      //-   router-link(to="/Test") Test
      //-   | |
      //-   router-link(to="/about") About
      //- a(href="#main-content" id="main-content" title="中央內容區(快速鍵Alt+C)" accesskey="C" class="INguideBricks hidden-xs hidden-sm")
      v-header
      mainVision
      router-view(:key="$route.path")
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      br
      imageTextList2
      imageTextList1
      v-footer
</template>

<script>
import header from './components/header/style1.vue'
import footer from './components/footer/style1.vue'
import mainVision from './components/mainVision/style1.vue'
import imageTextList1 from './components/imageTextList/style1.vue'
import imageTextList2 from './components/imageTextList/style2.vue'

export default ({
  components: {
    'v-header': header,
    'v-footer': footer,
    mainVision,
    imageTextList1,
    imageTextList2,
  }
})
</script>

<style lang="sass">
  @import "./assets/styles/reset"
  @import "./assets/styles/ccwork.css"
  @import "./assets/styles/font-ccwork.css"
  @import "./assets/sass/global.sass"
</style>