/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

/** const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
 const {createPage} = actions
 return new Promise((resolve, reject) => {

   // default page
   const defaultPageTemplate = path.resolve('src/templates/default-page.js')
   resolve(
     graphql(`
       {
         allContentfulDefaultPage(limit: 100) {
           edges {
             node {
               id
               slug
             }
           }
         }
       }
     `).then((result) => {
       if (!result.errors) {
         reject(result.errors)
       }
       result.data.allContentfulDefaultPage.edges.forEach((edge) => {
         createPage ({
           path: edge.node.slug,
           component: defaultPageTemplate,
           context: {
             slug: edge.node.slug
           }
         })
       })
       return
     })
   )

 })
}

*/
