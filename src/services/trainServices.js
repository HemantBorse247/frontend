import axios from '../http-common';

class TrainDataService {
    getAll() {
        return axios.get('/')
    }

    postTrainDetails() {
        return axios.post('/trains')
    }
}

export default new TrainDataService();