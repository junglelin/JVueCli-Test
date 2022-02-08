import axios from 'axios'

export default {
    getImageTextList1() {
        return axios.get('https://webshow.cc-work.com/api.php?w=aecc&action=imageText&zone=3')
    },
    getImageTextList2() {
        return axios.get('https://webshow.cc-work.com/api.php?w=aecc&action=event')
    }
}