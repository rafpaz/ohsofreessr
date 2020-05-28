const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  service: {
    endpoint: {
      url: process.env.SANITY_URL,
      headers: {
        Authorization: `Bearer ${process.env.SANITY_AUTH}`,
      },
    },
  },
};
