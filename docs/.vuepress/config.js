module.exports = {
    title: 'X先生', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: 'X先生技术点滴', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/geass-bg.ico' }], 
    ],
    base: '/wikiPro/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
      // 顶部导航栏
      nav:[
           // 单项 text：显示文字，link：指向链接
           // 这里的'/' 指的是 docs文件夹路径
           // [以 '/' 结尾的默认指向该路径下README.md文件]
          { text: '求索', link: '/Language/' },  // http://localhost:8080/Wiki1001Pro/FAQ/
          { text: '仓库', link: '/Language/' },
          { text: '随笔', link: '/Thought/' },
          {
              text: 'GitHub',
              items: [
                  { text: 'GitHub', link: 'https://github.com/GXH-Developer' }
              ]
          },
      ],
      sidebar:{
       '/Language/':[
          //多级菜单形式
          {
              // 菜单名
              title: '前端',
              // 子菜单
              children: [
                  // ['','']=>[路径,标题]
                  // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                  // 不以 '/' 结尾的就是指向.md文件             
                  ['/Language/JavaScript/','JavaScript'],
                  ['/Language/TypeScript/','TypeScript'],
                  ['/Language/Node/','Node'],
                  ['/Language/HTML/','HTML'],
                  ['/Language/CSS/','CSS'],
                  ['/Language/Vue/','Vue'],
                  ['/Language/React/','React']
              ]
          },
          {
              title: 'python',
              children: [
                  ['/Language/python/','python'],
              ]
          },
          {
              title: 'iOS',
              children: [
                  ['/Language/iOS/','iOS'],
              ]
          },
          
          
          
       ],  
        // 打开FAQ主页链接时生成下面这个菜单
       '/FAQ/':[
           //多级菜单形式
           {
               // 菜单名
               title: '项目',
               // 子菜单
               children: [
                   // ['','']=>[路径,标题]
                   // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                   // 不以 '/' 结尾的就是指向.md文件             
                   ['/FAQ/DigestionHeap/Digested','音乐'], // '/FAQ/DigestionHeap/Digested.md'文件
                   ['/FAQ/DigestionHeap/Digesting','电影']
               ]
           },
           ['/FAQ/','百科首页'],
           ['/FAQ/Pool/SkillStack','技术栈'],
           ['/FAQ/Pool/Review','归去来']
       ],
        // 打开Thought主页链接时生成下面这个菜单
       '/Thought/':[
           ['/Thought/','随笔首页'],
           {
               title: '感悟',
               children: [
                   ['/Thought/Travels/beiPing','感悟'],
               ]
           },
           {
               title: '年终回顾',
               children: [
                  ['/Thought/YearReview/2018','2018年'],
                  ['/Thought/YearReview/2019','2019年']
               ]
           },
       ],
         // 打开Store主页链接时生成下面这个菜单
       '/Store/': [
           ['','仓库首页'],
           {
               title: '应用',
               children: [
                   ['/Store/Apps/DownDoors', '下载门户'],
                   ['/Store/Apps/OwnTest', '博主测评']
               ]
           },
           {
               title: '电影',
               children: [
                   ['/Store/Films/','收藏级电影']
               ]
           },
           {
               title: '动画',
               children: [
                   ['/Store/Anime/','收藏级动画']
               ]
           },
       ]
   },
  },
  }