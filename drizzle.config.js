/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://carMarketplace_owner:b4ouAndt8zUN@ep-blue-math-a57ow7n7.us-east-2.aws.neon.tech/carMarketplace?sslmode=require',
    }
  };