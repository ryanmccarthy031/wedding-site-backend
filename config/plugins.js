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
      provider: 'gmail-2lo',
      providerOptions: {
        username: 'wedding-site-email@natural-oath-288814.iam.gserviceaccount.com',
        clientId: env('EMAIL_CLIENT_ID'),
        privateKey: env('EMAIL_PRIVATE_KEY'),
      },
      settings: {
        defaultFrom: 'us@leighandryan.com',
        defaultReplyTo: 'us@leighandryan.com',
      },
    },
  });