// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database()
const _=db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  var openid=wxContext.OPENID


  return await db.collection('users').where({
    _openid:_.eq(openid)
  }).update({
    data:{
      avatarUrl:event.avatarUrl,
      nickname:event.nickname
    }
  })



}
