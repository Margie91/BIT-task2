
class ValidationService {

    isReportFormValid (data, errorHandler){
        let errors = {};

        if (!this.hasAllRequiredFields(data)) {
            errors.allFields = "All fields must be filled out!";
            errorHandler(errors);
            return false;
        }

        return true;
    }

    hasAllRequiredFields(data){
        for (let key in data) {
            if (data[key] === "") {
                return false;
            }
        }

        return true;
    }

}

export const validation = new ValidationService();