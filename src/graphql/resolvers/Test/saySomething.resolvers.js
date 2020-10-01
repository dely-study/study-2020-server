const resolver = {
  Mutation: {
    saySomething: (_, args) => args.something,
  },
};

module.exports = resolver;
