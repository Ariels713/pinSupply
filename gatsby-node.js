const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productPage = path.resolve(`./src/templates/product.js`)
  const result = await graphql(`
    query {
      allContentfulCollections {
        nodes {
          id
          slug
        }
      }
    }
  `)
  result.data.allContentfulCollections.nodes.forEach((edge) => {
    createPage({
      path: `${edge.slug}`,
      component: productPage,
      context: {
        slug: edge.slug,
      },
    })
  })
}
