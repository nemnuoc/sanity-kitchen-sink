export default {
  widgets: [
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
                  buildHookId: '60b2153b45107b6f20eca156',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ps9kinck',
                  apiId: '374a168d-cfb8-482c-b78d-be7c388aee10'
                },
                {
                  buildHookId: '60b2153b98de69456b790bdc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-x7a6ccj1',
                  apiId: '32c0e899-2ab0-4036-a39e-6ece47c64d69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nemnuoc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-x7a6ccj1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
