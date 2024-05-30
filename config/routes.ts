export default [
  // user
  {
    path: '/user',
    routes: [
      {
        path: '/user', routes: [
          {name: '登录', path: '/user/login', component: './user/Login'},
          {name: '注册', path: '/user/register', component: './user/Register'}
        ]
      },
      {component: './404'},
    ],
  },
  //welcome
  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {path: '/admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage'},
      {component: './404'},
    ],
  },
  //数据展示
  {
    path: '/DataShow',
    name: '数据展示统计',
    icon: 'table',
    routes: [
      {
        name: '申报数据'
      },
      {
        name: '立项数据'
      },
      {
        name: '验收数据'
      },
    ]
  },

  //ProjectManage
  {
    path: '/ProjectManage',
    icon: 'table',
    name: '项目过程管理',
    routes: [
      // 我的项目
      {
        path: '/ProjectManage/MyProject',
        name: '我的项目',
        component: './ProjectManage/MyProject',
      },
      // 任务书填报
      {
        path: '/ProjectManage/TaskReport',
        icon: 'table',
        name: '任务书填报',
        component: './ProjectManage/TaskReport',
      },
      // 项目变更填报
      {
        path: '/ProjectManage/ProjectModify',
        name: '项目变更填报',
        component: './ProjectManage/ProjectModify',
      },
      // 项目年度进展填报
      {
        path: '/ProjectManage/AnnualProgressOfProject',
        name: '项目年度进展填报',
        component: './ProjectManage/AnnualProgressOfProject',
      },
      {
        redirect: './ProjectManage/ProjectModify',
      },
    ]
  },
  {
    path: '/PostponementAndAcceptance',
    icon: 'table',
    name: '延期与验收',
    routes: [
      {
        path: '/PostponementAndAcceptance/Postponement',
        name: '项目延期'
      },
      {
        path: '/PostponementAndAcceptance/Acceptance',
        name: '项目验收'
      },
    ]
  },
  // 权限设置(系统管理员才能配置)
  {
    path: '/AccessConfig',
    icon: 'table',
    name: '权限配置',
    routes: [
      {

      }
    ]
  },
  //会员中心
  {
    path: '/MemberCenter',
    icon: 'table',
    name: '会员中心',
    routes: [
      {
        path: '/MemberCenter/AccountCenter',
        name: '个人中心',
      },
      {
        path: '/MemberCenter/AccountModifyRecord',
        name: '会员变更记录',
      }
    ]
  },
  {path: '/', redirect: '/welcome'},
  {component: './404'},
];

