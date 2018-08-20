const config = {
  production: {
    secret: process.env.secret,
    MONGO_URI: process.env.MONGO_URI,
    port: process.env.PORT
  },
  developement: {
    secret: "I_AM_DUCKY",
    MONGO_URI: "mongodb://localhost:27017/music_api",
    port: 3000
  }
};

export const getConfig = env => config[env] || config.developement;
