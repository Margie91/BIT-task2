export const formatDate = (d) => {
    let date = new Date(d);
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //January is 0!
    let yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    let formatedDate = `${dd}.${mm}.${yyyy}.`;
    return formatedDate;
}

export const capitalizeFirstLetter = (string) => {
    if(typeof string !== "string") {
        return "";
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
}

