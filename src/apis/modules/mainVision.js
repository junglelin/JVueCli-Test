import axios from 'axios'

export default {
    getMainVision() {
        return axios.get('https://webshow.cc-work.com/api.php?w=aecc&action=mainvision')
    }
}