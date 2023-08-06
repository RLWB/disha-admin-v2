const fun = (name = "path") => {
  return (req, res, next) => {
    console.log(res.data);
    next();
  };
};

module.exports.filterRes = fun;
