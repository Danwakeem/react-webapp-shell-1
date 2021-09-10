/* eslint-disable no-unused-vars */
// next MUST be defined here in order for this to work - if next is removed from
// the signature, then this middleware will no longer capture the error.
const errorMiddleware = (err, req, res, next) => {
  const {
    query, params, url, headers,
  } = req;

  console.error('Route encountered an error!', {
    err,
    req: {
      query, params, url, headers,
    },
    stack: err.stack,
  });

  res.status(500).send({
    error: err.message,
  });
};

module.exports = errorMiddleware;
