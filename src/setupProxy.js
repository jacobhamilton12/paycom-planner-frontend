const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app){
    app.use(
        '/insert_user.php',
        createProxyMiddleware({
            target: "http://localhost/paycom-backend",
            secure: false,
            changeOrigin: true
        })
    );
    app.use(
        '/validate_user.php',
            createProxyMiddleware({
                target: "http://localhost/paycom-backend",
                secure: false,
                changeOrigin: true
            })
    );
    app.use(
        '/session.php',
            createProxyMiddleware({
                target: "http://localhost/paycom-backend",
                secure: false,
                changeOrigin: true
            })
    );
}