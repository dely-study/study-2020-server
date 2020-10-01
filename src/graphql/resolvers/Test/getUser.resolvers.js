const db = require('../../models');

const resolver = {
  Query: {
    getUser: () => {
      const user = db.User.findOne({
        where: {
          id: args.id,
        },
      });

      // const user = {
      //   name: 'KMSEO',
      //   age: 27,
      // };

      return {
        ok: true,
        user,
        error: 'no error',
      };
    },
  },
};

module.exports = resolver;
