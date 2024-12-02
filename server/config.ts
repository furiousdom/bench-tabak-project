import dotenv from 'dotenv';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.coerce.number().positive()
});

dotenv.config();
const config = envSchema.parse(process.env);

export default config;
