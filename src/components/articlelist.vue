<template>
    <div>
        articlelist
        {{ data.list }}

        <!-- 分類 -->
        <ul>
            <li>
                <router-link :to="{name: moduleName}">全部</router-link>
            </li>
            <li v-for="category in data.category" :key="category.cateid">
                <router-link 
                    :to="{
                        name: category.sn,
                        query: {
                            categoryId: category.cateid
                        }
                    }"
                >
                {{ category.name }}
                </router-link>
            </li>
        </ul>

        <!-- 頁碼 -->
        <ul class="pagination">
            <!-- 前一頁 previousPage -->
            <li
                v-show="data.pager.prev"
                :class="[{ disabled: data.pager.activePage === 1  }]"
            >
                <router-link
                    class="page-link"
                    aria-label="Previous"
                    :to="{
                        name: moduleName,
                        query: { categoryId: data.pager.cateid, page: data.pager.prev }
                    }"
                    >
                    <span aria-hidden="true">&laquo;</span>
                </router-link>
            </li>
            <li
                v-for="page in data.pager.totalPage"
                :key="page"
                :class="[{ active: data.pager.activePage === page }]"
            >
                <router-link
                :to="{ name: moduleName, query: { categoryId: data.pager.cateid, page } }"
                >
                {{ page }}
                </router-link>
            </li>

            <!-- 後一頁 nextPage -->
            <li
                v-show="data.pager.next"
                :class="[{ disabled: data.pager.activePage === data.pager.totalPage }]"
            >
                <router-link
                class="page-link"
                :to="{ name: moduleName, query: { categoryId: data.pager.cateid, page: data.pager.next } }"
                aria-label="Next"
                >
                <span aria-hidden="true">&raquo;</span>
                </router-link>
            </li>
        </ul>
        {{ data.pager }}

    </div>
</template>

<script>

export default ({
    name: 'articlelist',
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            moduleName: this.$route.name
        }
    }
})
</script>
<style scoped>
ul {
    display: flex
}
ul, li {
    list-style: none;
}
li {
    margin-right: 20px
}

.active {
    color: red;
}
</style>
