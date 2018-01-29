import { BASE_URL } from '../assets/constants';
import axios from "axios";

class CommunicationService {

    getRequest(url, dataHandler, errorHandler) {
        const requestUrl = `${BASE_URL}${url}`;

        axios.get(requestUrl)
            .then(response => dataHandler(response))
            .catch((error) => errorHandler(error));
    }


    deleteRequest(url, deleteHandler, errorHandler) {

        const requestUrl = `${BASE_URL}${url}`;

        axios.delete(requestUrl)
            .then(response => deleteHandler(response))
            .catch(error => errorHandler(error));
    }

    postRequest(url, data, dataHandler, errorHandler) {

        const requestUrl = `${BASE_URL}${url}`;

        axios.post(requestUrl, data)
            .then(response => dataHandler(response))
            .catch((error) => errorHandler(error));

    }
}

export const communicationService = new CommunicationService();