const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productPage = path.resolve(`./src/templates/collection/index.js`)
  const product = path.resolve(`./src/templates/individualProduct/index.js`)
  const result = await graphql(`
    {
      allContentfulCollections {
        nodes {
          id
          slug
        }
      }
      allContentfulProduct {
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

  result.data.allContentfulProduct.nodes.forEach((edge, index) => {
    createPage({
      path: `${edge.slug}`,
      component: product,
      context: {
        slug: edge.slug,
      },
    })
  })
}
