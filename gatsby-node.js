const path = require(`path`);
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/layouts/post.js`)

    const result = await graphql(`
    query CmsArticles  {
        allDatoCmsArticle {
            nodes {
              id
              title
            }
          }
            }
    `,);

    // Create blog post pages.
    result.data.allDatoCmsArticle.nodes.forEach(post => {

        const ourSlug = slugify(post.title, {
            lower: true
        })
        createPage({

            path: `articles/${ourSlug}`,
            component: blogPostTemplate,
            context: {
                id: post.id
            },
        });
    });
};



