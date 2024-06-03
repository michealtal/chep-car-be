const Validator = require("validatorjs");

const validator = async (body, rules, customMessage, callback) => {
  const validation = new Validator(body, rules, customMessage);
  validation.passes(() => callback(null, true));
  validation.fails(() => callback(validation.errors, false));
};

const registerValidation = async (req, res, next) => {
  const validateRule = {
    name: "required|string|min:3",
    email: "required|email",
    password: "required|max:200|min:3",
  };
  await validator(req.body, validateRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Valdation Failed, invalid fields for name  email password",
      });
    } else {
      next();
    }
  }).catch((err) => {
    console.error("You Have A Problem ", err);
  });
};
module.exports = {
  registerValidation,
};

const loginValidation = async (req, res, next) => {
  const validateRule = {
    email: "required|email",
    password: "required|min:6",
  };

  await validator(req.body, validateRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation faild",
        data: err,
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};

module.exports = {
  registerValidation,
  loginValidation,
};
//module.exports = Validator;
