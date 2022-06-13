import Joi from "joi-oid";

const validateCreateNote = (note) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    content: Joi.string().max(5000).required(),
  });
  return schema.validate(note);
};

export default validateCreateNote;
