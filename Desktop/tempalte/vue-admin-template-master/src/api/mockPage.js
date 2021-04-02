import Mock from 'mockjs'

// 把newList解构出来放到下面引用
const { newList } = Mock.mock({
  // id:'@id()',
  // name:'@cname()',
  // address:'@city(true)',
  // image: "@image('300x300', '#50B347', '#FFF', '哈哈哈')",
  // time:'@date(yyy-MM-dd hh:mm:ss)',
  'newList|10': [
    {
      id: '@id',
      title: '@ctitle',
      img: "@image('300x300', '#50B347', '#FFF', 'Mock.js')",
      content: '@cparagraph()',
      time: '@date(yyy-MM-dd hh:mm:ss)'
    }
  ]
})
// 操作url地址获取问号后面的数值
const getQuery = (url, name) => {
  const index = url.indexOf('?')
  // 传的参数存在
  if (index !== -1) {
    const querStrArr = url.substr(index + 1).split('&')
    for (let i = 0; i < querStrArr.length; i++) {
      const arrlist = querStrArr[i].split('=')
      if (arrlist[0] === name) {
        return arrlist[1]
      }
    }
    return null
  }
}
// 数据展示接口
Mock.mock(/\/api\/get\/news/, 'get', opt => {
  // console.log(opt.url);//可见opt是传过来的url参数
  // 获取pageindex
  const pageindex = getQuery(opt.url, 'pageindex')
  // 获取pagecount
  const pagecount = getQuery(opt.url, 'pagecount')
  // 获取起点
  const start = (pageindex - 1) * pagecount
  // 获取终点
  const end = pageindex * pagecount
  // 总数
  const totalpage = Math.ceil(newList.length / pagecount)
  // 获取区间
  const list = pageindex > totalpage ? [] : newList.slice(start, end)
  return {
    status: 200,
    msg: 'get获取成功',
    list: list,
    count: totalpage
  }
})

