const requestIP = require('request-ip');
const IP = require('ip');
const { StatusCodes } = require('http-status-codes');

const getIpAddress = (req, res) => {
  const IP1 = `req.ip ==> ${req.ip}`;
  const IP2 = `req.header('x-forwarded-for') ==> ${req.header(
    'x-forwarded-for'
  )}`;
  const IP3 = `req.socket.remoteAddress ==> ${req.socket.remoteAddressq}`;
  const IP4 = `require('request-ip').getClientIp(req) ==> ${requestIP.getClientIp(
    req
  )}`;

  // all the above prints loopback addresses(::1 if IPv6 or 127.0.0.1 if IPv4),
  // but below one prints absolute IP

  const IP5 = `require('ip').address() ==> ${IP.address()}`;

  res.status(StatusCodes.OK).json({
    IP1,
    IP2,
    IP3,
    IP4,
    IP5,
  });
};

module.exports = {
  getIpAddress,
};
