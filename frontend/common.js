/**
 * Common.js -- miscellaneous routines useful throughout the system
 */


/**
 * Get the value of a cookie, given its name
 * Adapted from https://docs.djangoproject.com/en/2.2/ref/csrf/#ajax
 * @param {string} name - The name of the cookie
 */
export function getCookie(name) {
    let cookieValue;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (const rawCookie of cookies) {
            const cookie = rawCookie.trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


/**
 * Calls a given api endpoint with a POST request
 * Given a request body and a callback function for what to do with the
 * resulting JSON. We expect the Response body to be JSON here.
 **/
export const fetchPost = (
    apiUrl,
    body,
    responseCallbackFunc,
    bodyIsJson=true,
) => {
    const csrftoken = getCookie("csrftoken");
    const headers = {"X-CSRFToken": csrftoken};

    if (bodyIsJson) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(body);
    }

    console.log(body);

    const requestOptions = {
        method: "POST",
        body,
        headers,
    };

    return fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(responseDict => responseCallbackFunc(responseDict));
};




/**
 * Delays a function invocation (used when lots of changes are happening very quickly,
 * but we don't want to be super reactionary)
 * taken from https://www.freecodecamp.org/news/javascript-debounce-example/
 * */
export function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}
