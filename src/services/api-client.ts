import axios from "axios";

export default axios.create({

    baseURL: 'https://api.rawg.io/api',

    params:{
        key : 'ef22a71fe99f492ab6796beaa2489acc'
    }
})