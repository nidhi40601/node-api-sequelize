const express = require('express');
const app = express();
const db = require('./models');
const env = require('dotenv/config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const employeeRouter = require('./routes/route');

app.use('/employees', employeeRouter);

const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
    app.listen(PORT,() => console.log(`Server listening on port ${PORT}`));
})
