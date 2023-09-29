require('dotenv').config();
require('express-async-errors');
// express

const express = require('express');
const app = express();
// rest of the packages
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
app.use(morgan('short'));

// middleware
const errorHandlerMiddleware = require('./middleware/error-handler');
const appRouter = require('./routes/appRouter');

app.use(helmet());
app.use(cors());
app.use(xss());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<a href="/api/v1/getip">Get IP</a>');
});

app.use('/api/v1', appRouter);

app.use((req, res) => {
  res.send('Route not Found');
});
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
