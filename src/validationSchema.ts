import * as Joi from 'joi';

export const validationSchema = Joi.object({
  // Database
  POSTGRES_HOST: Joi.string().hostname().required(),
  POSTGRES_PORT: Joi.number().port().default(5432),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),

  // TypeORM
  TYPEORM_SYNC: Joi.boolean().required(),

  //API
  WEATHER_API: Joi.string().uri().required(),
  USERS_API: Joi.string().uri().required(),

  // Common
  CLIENT_URL: Joi.string().required(),
});
