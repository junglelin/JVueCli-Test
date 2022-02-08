import axios from 'axios'

export default {
    getHeader() {
        return axios.get('https://webshow.cc-work.com/api.php?action=vueHeader')
    }
}