const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email address',
        'any.required': 'Email is required'
    }),
    password: Joi.string().pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$')).required().messages({
        'string.pattern.base': 'Password must be at least 6 characters long and contain at least one number and one letter',
        'any.required': 'Password is required'
    })
});

const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    
    if (error) {
        const errorMessages = error.details.map(err => err.message);

        return res.status(400).json({
            errors: errorMessages
        });
    }
    next();
}

module.exports = validateUser;
