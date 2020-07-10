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
    app.use(
        '/events.php',
            createProxyMiddleware({
                target: "http://localhost/paycom-backend",
                secure: false,
                changeOrigin: true
            })
    );
    app.use(
        '/getEvents.php',
            createProxyMiddleware({
                target: "http://localhost/paycom-backend",
                secure: false,
                changeOrigin: true
            })
    );
    app.use(
        '/logout.php',
            createProxyMiddleware({
                target: "http://localhost/paycom-backend",
                secure: false,
                changeOrigin: true
            })
    );
    app.use(
        '/deleteEvent.php',
            createProxyMiddleware({
                target: "http://localhost/paycom-backend",
                secure: false,
                changeOrigin: true
            })
    );
    app.use(
        '/incrementAttendees.php',
            createProxyMiddleware({
                target: "http://localhost/paycom-backend",
                secure: false,
                changeOrigin: true
            })
    );
    app.use(
        '/removeAttendee.php',
            createProxyMiddleware({
                target: "http://localhost/paycom-backend",
                secure: false,
                changeOrigin: true
            })
    );
}