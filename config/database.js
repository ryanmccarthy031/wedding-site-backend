module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
        database: env('DATABASE_NAME', 'strapi'),
      },
      options: {
        ssl: true,
      },
    },
  },
});