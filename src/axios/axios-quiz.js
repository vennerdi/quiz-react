import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-535fa-default-rtdb.firebaseio.com/'
})