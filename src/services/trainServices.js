import axios from '../http-common';

class TrainDataService {
    getTrains(url, params) {
        return axios.get(url, { params: params })
    }

    postTrains(url, params) {
        return axios.post(url, { params: params })
    }

    // postTrainDetails() {
    //     return axios.post('/api/src')
    // }

    // getTrainDetails() {
    //     return axios.get('/api/src')
    // }

}

export default new TrainDataService();