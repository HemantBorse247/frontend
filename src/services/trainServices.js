import axios from '../http-common';

class TrainDataService {
    getAll() {
        return axios.get('/')
    }
}

export default new TrainDataService();