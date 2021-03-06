interface MenuDataItem {
  name: string;  // 菜单名字
  icon?: string;
  path: string;
  children?: Array<MenuDataItem>;
  permission?: string;  // 菜单标识
}

const menuData: MenuDataItem[] = [
  {
    name:'首页',
    icon: 'pie-chart',
    path: 'cont/dashborad',
    permission: 'dashborad'
  },
  {
    name: '列表一',
    icon: 'ordered-list',
    path: 'cont/list',
    permission: 'list1',
    children: [
      {
        name: '查询表格',
        path: 'one',
        permission: 'list1_1'
      },
      {
        name: '商品列表',
        path: 'two',
        // permission: 'list1_2'
      },
      {
        name: '二级菜单',
        path: 'menu',
        children: [
          {
            name: '三级菜单_a',
            path: 'one'
          },
          {
            name: '三级菜单_b',
            path: 'two'
          }
        ]
      }
    ]
  },
  {
    name: '列表二',
    icon: 'ordered-list',
    path: 'cont/two',
    permission: 'list2',
    children: [{
      name: '选项1',
      path: 'one'
    }, {
      name: '选项2',
      path: 'two'
    }]
  }
];

function formatter(data, parentPath=''){
  const list = []
  data.forEach( item=> {
    if(item.children){
      list.push({
        ...item,
        path: `${parentPath}${item.path}`,
        children: formatter(item.children, `${parentPath}${item.path}/`)
      })
    } else {
      list.push({
        ...item,
        path: `${parentPath}${item.path}`,
      });
    }
  })

  return list
}

export const getMenuData = ()=>formatter(menuData)
