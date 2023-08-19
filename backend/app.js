const express = require('express');
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');
const app = express();
const swaggerDocument = require("./swagger.json"); // Replace with the path to your JSON file

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Ecommerce backend api',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:4000'
            }
        ]
    },
    apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options);
// const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))




const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');





app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));

app.use(fileUpload());
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
dotenv.config({ path: 'backend/config/config.env' });




// router imports
const product = require('./routes/productRoute');
const user = require('./routes/userRouter');
const admin = require('./routes/adminRoute');
const order = require('./routes/orderRoute');
const payment = require('./routes/paymentRoute');

// const cookieParser = require('cookie-parser');




app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', admin);
app.use('/api/v1', order);
app.use('/api/v1', payment);


// middleware for error
app.use(errorMiddleware);


module.exports = app;