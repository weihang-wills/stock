// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数



exports.main = async (event,context)=>({

  
    sum:event.a + event.b,
    tax:event.a * event.b + 2

  

})

 
  

   
    
    
  
