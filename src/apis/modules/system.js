import axios from 'axios'

export default {
    getIndexData() {
        return axios.get('https://webshow.cc-work.com/api.php?action=vueIndex')
    },
    getArticleList({ sn, page, categoryId }) {
        const searchParams = new URLSearchParams({ page, categoryId })
        return axios.get(`https://webshow.cc-work.com/api.php?action=vueArticleList&sn=${sn}&${searchParams.toString()}`)
    }
}