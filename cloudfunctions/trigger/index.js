// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {

      var arr = [];
      for (var i = 0; i < 10; i++) {
        arr.push((Math.floor(Math.random() * (10 + 10 + 1) - 10)) / 100)
      }

      var price = [];
      await db.collection('stockprice')
        .orderBy('date', 'desc')
        .limit(1)
        .get()
        .then(res => {
          price = res.data[0];
          console.log(res.data)
        })

      var newprice = [];
      for (var i = 0; i < 10; i++) {

        newprice.push(((1 + arr[i]) * price.stockprice[i].price).toFixed(2))
        }

        console.log('newprice:' + newprice)

        var stockprice=[{
            name: "阿尼巴巴",
            price: newprice[0],
            rate: parseInt(arr[0]*100)
          },

          {
            name: "疼讯",
            price: newprice[1],
            rate: parseInt(arr[1]*100)

          },
          {
            name: "东京公司",
            price: newprice[2],
            rate: parseInt(arr[2]*100)

          },
          {
            name: "大米",
            price: newprice[3],
            rate: parseInt(arr[3]*100)

          },
          {
            name: "小度",
            price: newprice[4],
            rate: parseInt(arr[4]*100)

          },
          {
            name: "字母跳动",
            price: newprice[5],
            rate: parseInt(arr[5]*100)

          },
          {
            name: "拼夕夕",
            price: newprice[6],
            rate: parseInt(arr[6]*100)

          },
          {
            name: "比特海洋",
            price: newprice[7],
            rate: parseInt(arr[7]*100)

          },
          {
            name: "提斯拉",
            price: newprice[8],
            rate: parseInt(arr[8]*100)

          },
          {
            name: "小苹果",
            price: newprice[9],
            rate: parseInt(arr[9]*100)

          }
        ]

        console.log('stockprice:' + stockprice)

        await db.collection('stockprice')
        .add({
            data:{
              date: new Date(),
              stockprice: stockprice,

            }
          })
          .then(res => {
            console.log('录入成功' + res)
          })






      }
