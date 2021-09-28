function capitalize(string) {
    finalStr = string.charAt(0).toUpperCase() + string.slice(1);
    return finalStr;
}

module.exports = capitalize;