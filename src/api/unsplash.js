import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID HfRLFvmnCEpy09ft3KrGdpGe8GfWpff_pdiYuh4F2FI'
    }
})