import dotenv from 'dotenv';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.coerce.number().positive(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.number(),
  DATABASE_NAME: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string()
});

dotenv.config();
const config = envSchema.parse(process.env);

export default config;
