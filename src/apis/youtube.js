import axios from 'axios';

const KEY = 'AIzaSyDULMDACmx0TkHqvfBUEm18tc16-1J0U6Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});