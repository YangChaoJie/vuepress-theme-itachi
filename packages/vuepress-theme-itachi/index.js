const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  plugins: [
    ['@vuepress/last-updated',{
        transformer: (timestamp) => {
          const moment = require('moment');
          moment.locale('zh-CN')
          return moment(timestamp).format('LLLL')
        }
      }
    ],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    // '@vuepress/back-to-top',
    '@vuepress/nprogress',
    '@vuepress/active-header-links',
    [
      'vuepress-plugin-comment', // 评论
      // {
      //   choosen: 'gitalk',
      //   options: {
      //     clientID: '7d9bc757c6f31223be93',
      //     clientSecret: 'd5eee424588d2ac1a54b4fed84457b63c8478c24',
      //     repo: 'Bolg-Issue', // GitHub 仓库
      //     owner: 'YangChaoJie', // GitHub仓库所有者
      //     admin: ['YangChaoJie'], // 对仓库有写权限的人
      //     // distractionFreeMode: true,
      //     pagerDirection: 'last', // 'first'正序 | 'last'倒序
      //     id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
      //     title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
      //     labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
      //     body:
      //       '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      //   },
      // }
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'VdtG1XUWLAasnVVmDRyS6KY5-gzGzoHsz',
          appKey: 'hPIqqVG43bGz1UBBE4VmVnlr',
          placeholder: '来说点什么吧~',
          path: '<%- window.location.pathname %>'
        }
      }
    ]
  ]
})