module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_KEY'),
      secretAccessKey: env('AWS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET'),
      },
    },
  },
  email: {
    provider: 'gmail-oauth2',
    providerOptions: {
      username: env('SERVICE_ACCOUNT_EMAIL'),
      clientId: env('EMAIL_CLIENT_ID'),
      clientSecret: env('EMAIL_PRIVATE_KEY'),
      refreshToken: env('EMAIL_REFRESH_TOKEN'),
      accessToken: env('EMAIL_ACCESS_TOKEN'),
    },
    settings: {
      defaultFrom: env('GMAIL_ADDR'),
      defaultReplyTo: env('GMAIL_ADDR'),
    },
  },
});