//index.js
const app = getApp()


Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    nickname: '',
    logged: false,
    exist: false,
    //更新最新的stockprice
    stockprice: [],
    totalAssets: 1000,

    renewPriced: false,
    renewHold:false,

    onshow: false,
    onshowmyasset:false,


    //更新最新的hold
    stock: [{
        name: '阿尼巴巴',
        price: 95,
        hold: 0
      },
      {
        name: '疼讯',
        price: 98,
        hold: 0
      },
      {
        name: '东京公司',
        price: 86,
        hold: 0
      },
      {
        name: '大米',
        price: 75,
        hold: 0
      },
      {
        name: '小度',
        price: 60,
        hold: 0
      },
      {
        name: '字母跳动',
        price: 40,
        hold: 0
      },
      {
        name: '拼夕夕',
        price: 15,
        hold: 0
      },
      {
        name: '比特海洋',
        price: 35,
        hold: 0
      },
      {
        name: '提斯拉',
        price: 50,
        hold: 0
      },
      {
        name: '小苹果',
        price: 70,
        hold: 0
      },

    ]


  },

  seeasset:function(){

    if (!this.data.renewHold) {
      wx.showLoading({
        title: '您暂未购买',
      })

      setTimeout(function() {
        wx.hideLoading()
      }, 2000)
    } else {

      this.setData({
        onshowmyasset: true
      })

    }


  },



  modalcancelasset:function(){
    this.setData({
      onshowmyasset:false,
    })
  },

  //查取消弹窗
  modalcancel:function(){
    this.setData({
      onshow:false,
    })
  },
  //查询是否有用户记录了
  checkUser: function(e) {

    var that = this;

    wx.cloud.callFunction({
      name: 'insertUser',
      data: {},
      success: res => {


        console.log(res)
        if (res.result.data.length == 0) {
          console.log('找不到此用户')
          this.setData({
            exist: true
          })

        } else {
          that.getTotal()
        }
      }
    })

    //使用云函数



  },


  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }



    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                nickname: res.userInfo.nickName,
              })
            }
          })
        }
      }
    })

    this.checkUser();
    this.renewPrice();

  },



  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo,
        nickname: e.detail.userInfo.nickName,
      })
    }
  },

  //在数据库插入新数据
  addUser: function(stock, leftmoney) {

    const db = wx.cloud.database()
    var that=this;

    //判断是否有数据，有则更新

    // 目前第一版先不做更新的



    //无则新增


    db.collection('users').add({
      data: {
        date: new Date(),
        stock: stock,

        leftmoney: leftmoney,

      },
      success: res => {
        console.log(res)
        wx.showToast({
          title: '购买成功',
          icon: 'success',
          duration: 2000

        })
        that.setData({
          onshow:false,
          exist:false,
        })
        that.getTotal();




      },
      fail: console.error,
    })


  },

  //弹出框函数
  onshow: function() {

    if (!this.data.renewPriced) {
      wx.showLoading({
        title: '最新股价获取中…',
      })

      setTimeout(function() {
        wx.hideLoading()
      }, 2000)
    } else {

      this.setData({
        onshow: true
      })

    }



  },









  //购买函数
  onsubmit: function(e) {

    //获取表单数据

    console.log(e.detail.value);
    var value = e.detail.value;

    var arr = [];
    for (var i in value) {
      arr.push(value[i])
    }

    var price = this.data.stockprice
    var sum = 0;
    for (var i = 0; i < 10; i++) {
      sum += (parseInt(arr[i]) || 0) * price[i].price
    }

    if (sum > 1000) {
      wx.showToast({
        title: '需要￥'+sum+'，金额不足',
        icon: 'success',
        duration: 2000
      })
      return
    }








    //往stock里面塞数据
    var stock = this.data.stock;

    for (var i = 0; i < 10; i++) {
      stock[i].hold = parseInt(arr[i]) || 0
      stock[i].price=price[i].price
    }


    //更新到data
    this.setData({
        stock: stock
      },
      function() {
        console.log(this.data.stock)
      })

    //上传数据
    var investmoney = 0;
    var leftmoney = 0;
    for (var i = 0; i < 10; i++) {
      investmoney += stock[i].price * stock[i].hold
      console.log(stock[i].price * stock[i].hold);
    }

    leftmoney = 1000 - investmoney;
    console.log(investmoney)

    this.addUser(stock, leftmoney);





  },



  //更新股价函数

  renewPrice: function() {
    const db = wx.cloud.database()
    var that = this;

    db.collection('stockprice')
      .orderBy('date', 'desc')
      .limit(1)
      .get()
      .then(res => {
        that.setData({
          stockprice: res.data[0].stockprice,
          renewPriced: true,
        }, function() {
          console.log(res.data)
        })


      })
      .catch(console.error)






  },


  //获取总资产函数，promise.all 获取stockprice和用户的hold

  getTotal: function() {

    const db = wx.cloud.database()

    var price = db.collection('stockprice')
      .orderBy('date', 'desc')
      .limit(1)
      .get()

    var hold = wx.cloud.callFunction({
      name: 'gethold',
      data: {},

    })

    var totalAssets = 0;
    var that = this;

    Promise.all([price, hold])
      .then(
        res => {
          var pricearr = res[0].data[0].stockprice
          var holdarr = res[1].result.data[0].stock

          console.log(pricearr);
          console.log(holdarr)

          for (var i = 0; i < 10; i++) {
            totalAssets += pricearr[i].price * holdarr[i].hold

          }
          var leftmoney = res[1].result.data[0].leftmoney

          totalAssets += leftmoney;

          that.setData({
            renewHold:true,

            totalAssets: totalAssets.toFixed(2),
            stock:res[1].result.data[0].stock,

          })
        }
      )







  },


  onShareAppMessage:function(){

    return {
      title: '模拟炒股天天乐，疼讯、阿尼、大米等公司你来投资~',
      path: '/pages/index/index'
    }

  },

  //删库备用函数
  delect: function() {
    wx.cloud.callFunction({
      name: 'delect',
      data: {},
      success: res => {
        console.log(res)
      }

    })
  }









})
