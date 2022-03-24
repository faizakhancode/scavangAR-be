const customError = (err, req, res, next) => {
  if (err.name === 'CastError' || err.name === 'ValidationError') {
    res.status(400).send({ msg: 'Bad request' });
  } else next(err);
};

module.exports = customError;
