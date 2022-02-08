<template>
  <div class="home">
    <style1 />
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

import style1 from '@/components/header/style1.vue'
import dataAPI from '../apis/modules/system.js'

export default {
  name: 'index',
  components: {
    style1
  },
  data() {
    return {
      dataArray: []
    }
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await dataAPI.getIndexData()
        this.dataArray = data.testArray
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
  created() {
    this.fetchData()
    console.log('route', this.$route)
  }
}
</script>
