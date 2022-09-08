require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
const path = require("path");
const { logger, } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler")
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

console.log(process.env.MONGO_SERVER_URI);
// Application use Middleware
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

// Application - root Page
app.use('/', require("./routes/root"));

// Not Found Or 404 error Page
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', "404.html"))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found!' })
    } else {
        res.type('txt'.send('404 Not Found!'));
    }
})

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running in port no : ${PORT}`));