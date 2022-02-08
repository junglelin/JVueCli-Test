<template>
  <div class="about">
      <Header />

    <h1>This is an articlelist1 page</h1>
    <div class="zone" v-for="(item, index) in dataArray" :key="index">
        <template>
            <div class="wrapper">
              <div  class="groove" :class="'groove-'+item.componentName.length" v-for="(component, index) in item.componentName.length" :key="index">
                  <component :is="item.componentName[index]" :data="item.data[index]">
                  </component>  
              </div>
            </div>
        </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import dataAPI from '../apis/modules/system.js'
import Header from "./../components/Header.vue"

export default {
  name: 'news1',
  components: {
    Header
  },
  data() {
    return {
      dataArray: [],
    }
  },
  created() {
    const sn = this.$route.name
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchData({ sn, queryPage: page, queryCategoryId: categoryId })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('path', this.$route.path)
    console.log('name', this.$route.name)
    const sn = this.$route.name
    const { page = '', categoryId = '' } = to.query
    this.fetchData({ sn, queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    async fetchData({ sn, queryPage, queryCategoryId }) {
      try {
        const { data } = await dataAPI.getArticleList({
          sn,
          page: queryPage,
          categoryId: queryCategoryId
        })
        this.dataArray = data.vueArticleList
        
        this.asyncComponents()
      } catch (error) {
        console.log(error)
      }
    },
    asyncComponents() {
      if (this.dataArray) {
        this.dataArray.forEach(item => {
            item.componentName.forEach(componentName => {
            this.$options.components[componentName] = () => import(`@/components/${componentName}`)
          })
        });
      }
    }
  },
}
</script>
