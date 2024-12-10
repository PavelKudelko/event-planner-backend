const Joi = require('joi');
const Event = require('../models/event');

const eventSchema = Joi.object({
    title: Joi.string().min(1).required(),
    date: Joi.string().min(8).required(),
    location: Joi.string().min(5).required(),
    price: Joi.number().integer().min(1).max(1000),
    description: Joi.string(),
});

const validateEvent = async (req, res, next) => {
    // Validate input with Joi
    const { error } = eventSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = { validateEvent };