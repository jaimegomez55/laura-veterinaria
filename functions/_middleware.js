export async function onRequest(context) {
    const url = new URL(context.request.url);

    // Si la ruta no es un archivo estático (sin extensión)
    if (!url.pathname.includes('.')) {
        // Reescribir la URL para que cargue index.html
        return context.env.ASSETS.fetch(new Request(new URL('/index.html', url)));
    }

    // Para archivos estáticos (CSS, JS, imágenes), dejarlos pasar
    return context.next();
}
