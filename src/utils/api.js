import axios from 'axios'

const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options)
        return data
    } catch (err) {
        console.log(err);
        return err
    }
}

export default fetchDataFromApi