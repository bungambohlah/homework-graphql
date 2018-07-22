const lodash = require('lodash')
const { ApolloError } = require('apollo-client')
const User = require('./models/User')
const Phone = require('./models/Phone')

const resolvers = {
  Query: {
    async users(_, args) {
      let data = await User.query();
      return data;
    },
    async user(_, args) {
      let data = await User.query().where("id", "=", args.id);
      if (lodash.isEmpty(data)) {
        throw new ApolloError('Not found', "NOT_FOUND")
      }
      return data[0]
    },
    async userWithPhones(_, args) {
      let data = await User.query().eager("phones");
      return data;
    },
  },

  Mutation: {
    async addUser(_, args) {
      let data = await User.query().insert({name: args.name})
      return data;
    },

    async addPhoneToUser(_, args) {
      let user = await User.query().where("id", "=", args.userId);
      let data = await Phone.query().insert({'user_id': user[0].id, 'phoneNumber': args.phoneNumber})
      let returnData = await Phone.query().where("id", "=", data.id).eager("user")
      return returnData[0];
    }
  }
};

module.exports = resolvers;
