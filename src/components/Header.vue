<template>
    <div>
      <ul class="parent">
          <li v-for="item in header.menu" :key="item.menuId">
              <router-link :to="item.path">
                {{ item.menuName }}
              </router-link>
              <ul class="second-menu" v-if="item.children">
                  <li v-for="secondItem in item.children" :key="secondItem.menuId">
                      <router-link :to="secondItem.path">
                        {{ secondItem.menuName }}
                      </router-link>
                      <ul class="third-menu" v-if="secondItem.children">
                          <li v-for="thirdItem in secondItem.children" :key="thirdItem.menuId">
                            <router-link :to="thirdItem.path">
                                {{ thirdItem.menuName }}
                            </router-link>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
        </ul>  
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default ({
  computed:  
    mapState(['header'])
  ,
})
</script>

<style scoped>
.parent {
  display: flex;
  justify-content: space-between
}

ul, li {
  list-style: none;
}
</style>