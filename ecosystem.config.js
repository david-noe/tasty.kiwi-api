module.exports = {
  apps: [
    {
      name: "TastyKiwiAPI",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/strapi/bin/strapi.js",
      args: "start",
    },
  ],
};
