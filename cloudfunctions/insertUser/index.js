// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database()
const _=db.command





// 云函数入口函数
exports.main = async (event, context) => {

  const wxContext = cloud.getWXContext()
  var openid=wxContext.OPENID

  console.log('openid是'+openid)

//方法1，用await来处理和阻塞函数
  // var ress;
  // await db.collection('users').where({
  //   _openid:_.eq(openid)
  // }).get().then(res=>{ress=res})
  // return {ress:ress}


//方法2，和方法1类似
  // const ress=await db.collection('users').where(
  //   {
  //     _openid:_.eq(openid)
  //   }
  // ).get()
  //
  // return{ress:ress}


  //方法3，return一个await函数
  return await db.collection('users').where({
    _openid:_.eq(openid)
  }).get()



}
