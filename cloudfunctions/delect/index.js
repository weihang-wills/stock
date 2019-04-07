// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db=cloud.database()
const _=db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  await db.collection('stockprice')
  .where({
    _id:_.neq("XKS5-1sqTi00tqq9")
  })
  .remove()
  .then(res=>{console.log(res)})
  .catch(console.error)

}
