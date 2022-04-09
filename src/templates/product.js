import React from 'react'
import Layout from '../../components/layout'

function Products() {
  return (
    <Layout>
      <h1>Product Page</h1>
    </Layout>
  )
}

export default Products
// query {
//     allContentfulCollections {
//       nodes {
//         id
//         slug
//         collectionTitle {
//           name
//           alt
//           description
//           bannerImage {
//             gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
//           }
//         }
//       }
//     }
//   }
