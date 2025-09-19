const contentTypes = {
    // Datos Aplicacion
    ".json":    "application/json",
    ".xml":     "application/xml",
    // Formatos de Texto
    ".html":     "text/html",
    ".css":     "text/css",
    ".js":      "text/javascript",
    // Formatos Multimedia
    ".gif":     "image/gif",
    ".jpg":     "image/jpg",
    ".png":     "image/png",
    ".svg" :    "image/svg+xml",
    ".webp":     "image/webp",
    ".mp3":      "audio/mpeg",
    ".ogg":      "audio/ogg",
    ".mp4":      "video/mp4",
    ".webm":     "video/webm",
    // Formatos de Fuente
    ".woff":     "font/woff",
    ".otf":      "font/otf",
    ".ttf":      "font/ttf",

    "default":  "text/plain",
}
export const getContentTypes = (format) => 
    contentTypes[format] || contentTypes["default"]