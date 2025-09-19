const fileList = {
    "index.html": /\/$|index\.html$|main$|home$/,
    "styles.css": /styles|default\.css/,
    "scripts.js": /scripts|app|main\.js$/,
}
export const getFileName = (url) => {
    let file;
    Object.entries(fileList).map(([fileName, regExp]) => {
        if (regExp.test(url)) file = fileName;
    })
    return file || url;
}