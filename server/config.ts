import dotenv from 'dotenv';

interface ENV {
  NODE_ENV: string | undefined;
  PORT: number | undefined;
  DB_HOST: string | undefined;
  DB_PORT: number | undefined;
  DB_NAME: string | undefined;
  DB_USER: string | undefined;
  DB_PASSWORD: string | undefined;
}

interface Config {
  NODE_ENV: string;
  PORT: number;
  DB_HOST: string | undefined;
  DB_PORT: number | undefined;
  DB_NAME: string | undefined;
  DB_USER: string | undefined;
  DB_PASSWORD: string | undefined;
}

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    DB_HOST: process.env.DATABASE_HOST,
    DB_PORT: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : undefined,
    DB_NAME: process.env.DATABASE_NAME,
    DB_USER: process.env.DATABASE_USER,
    DB_PASSWORD: process.env.DATABASE_PASSWORD,
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

dotenv.config();
const config = getConfig();
const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
