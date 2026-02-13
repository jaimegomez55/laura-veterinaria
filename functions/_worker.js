export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Si la ruta NO es un archivo estático (no tiene extensión)
        // Y NO es la raíz, reescribir a index.html
        if (!url.pathname.includes('.') && url.pathname !== '/') {
            url.pathname = '/index.html';
            return env.ASSETS.fetch(new URL(url));
        }

        // Para archivos estáticos y raíz, dejar pasar normalmente
        return env.ASSETS.fetch(request);
    }
}
