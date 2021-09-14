module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 4000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "2bb66b7e6333ce1ea227920ff7f33aa9"),
    },
  },
});
