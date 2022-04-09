export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6250ebc6e620cf4189a6053b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8v2roc2w',
                  apiId: 'c857f6d8-9ccb-4acc-a90a-f1de58825421'
                },
                {
                  buildHookId: '6250ebc70e435b38cc19a729',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gwaj5y4s',
                  apiId: '1d0a9609-523d-4ca9-8c6b-7905e14aaee6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sdeakin93/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gwaj5y4s.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
