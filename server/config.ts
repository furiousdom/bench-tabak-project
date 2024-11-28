import dotenv from 'dotenv';

interface ENV {
  NODE_ENV: string | undefined;
  PORT: number | undefined;
}

type Config = ENV;

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined
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
