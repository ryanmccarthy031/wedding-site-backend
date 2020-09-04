module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 443),
  admin: {
    url: '/dash',
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
