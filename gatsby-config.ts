import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `new-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components",
  // {
  //   resolve: 'gatsby-source-graphql',
  //   options: {
  //     typeName: 'Products',
  //     fieldName: 'products',
  //     url: 'http://localhost:8000/api',
  //   },
  // },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "data",
      path: `${__dirname}/src/data/`,
    },
  },
  "gatsby-transformer-json",
]
};

export default config;
