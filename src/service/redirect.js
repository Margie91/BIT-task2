class Redirect {
 
    goTo(path) {

        window.location.assign(`${path}`);

    }
}

export const redirect = new Redirect();