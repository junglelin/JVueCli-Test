import axios from 'axios'

export default {
    getFooter() {
        return axios.get('https://webshow.cc-work.com/api.php?w=aecc&action=footer')
    }
}