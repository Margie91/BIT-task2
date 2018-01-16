import { BASE_URL } from '../constants';
import axios from "axios";

class CommunicationService {

    getRequest(url, dataHandler, errorHandler) {
        const requestUrl = `${BASE_URL}${url}`;

        axios.get(requestUrl)
            .then(response => dataHandler(response))
            .catch((error) => errorHandler(error));
    }

}

export const communicationService = new CommunicationService();