const typeDefs = `
  type Post {
    id: ID!
    title: String!
    description: String!
    url: String!
    movie:String!
    
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }

  input Input {
    title: String!
    description: String!
    url: String!
    movie: String
  }

  type Mutation {
    createPost(body: Input): Post!
  }
`;

export default typeDefs;
