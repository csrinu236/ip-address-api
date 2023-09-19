const { getIpAddress } = require('../controllers/appController');

const appRouter = require('express').Router();

appRouter.get('/getip', getIpAddress);

module.exports = appRouter;
