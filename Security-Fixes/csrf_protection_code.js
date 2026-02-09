npm install csurf

const csrf = require('csurf');
const csrfProtection = csrf();

app.use(csrfProtection);
