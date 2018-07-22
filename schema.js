const typeDefs = `
  type Query {
    users: [User]
    user(id: Int!): User
    userWithPhones: [User]
  }

  type Mutation {
    addUser(name: String!) : User
    addPhoneToUser(userId: Int!, phoneNumber: String!) : Phone
  }

  type User {
    id: Int!
    name: String!
    phones: [Phone]
  }

  type Phone {
    id: Int!
    phoneNumber: String!,
    user_id: Int!
    user: User
  }
  `;

module.exports = typeDefs;
