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
}