module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2baa73bef4dc131fbd04301a65402350'),
  },
});
