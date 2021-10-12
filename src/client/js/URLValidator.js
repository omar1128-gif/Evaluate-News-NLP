import isURL from "validator/lib/isURL";

function validateURL(inputValue) {
    return isURL(inputValue);
}

export { validateURL };
