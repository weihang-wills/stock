//index.js
const app = getApp()


Page({
  data: {
    avatarUrl: 'data:image/png;base64,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',
    userInfo: {},
    nickname: '点击头像登录',
    logged: false,
    exist: false,
    //更新最新的stockprice
    stockprice: [],
    totalAssets: 1000,

    renewPriced: false,
    renewHold: false,

    onshow: false,
    onshowmyasset: false,

    swiperheight:660,
    current:0,


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

    ],

    rank:[],


  },

  onPullDownRefresh:function() {

    wx.cloud.callFunction({
      name:'getrank',
      data:{}
    }).then(res=>{
      this.setData({
        rank:res.result.data
      })
      console.log('刷新完成')
      console.log(res.result.data)
      wx.stopPullDownRefresh()
    })

  },



  getrank:function(){

    wx.cloud.callFunction({
      name:'getrank',
      data:{}
    }).then(res=>{
      this.setData({
        rank:res.result.data
      })
      console.log('rank')
      console.log(res.result.data)
    })



  },





  changetab:function(e){



    this.setData({
      current:e.target.dataset.current
    })
    console.log('swiper:'+e.target.dataset.current)



  },

  seeasset: function(e) {

    if (!this.data.renewHold) {
      wx.showLoading({
        title: '您暂未购买',
      })

      setTimeout(function() {
        wx.hideLoading()
      }, 2000)

      return
    }

    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo,
        nickname: e.detail.userInfo.nickName,
      })
    }

    console.log(e);



    this.setData({
      onshowmyasset: true
    })

    wx.cloud.callFunction({
        name: 'update',
        data: {
          avatarUrl: this.data.avatarUrl,
          nickname: this.data.nickname,
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(console.error)








  },



  modalcancelasset: function() {
    this.setData({
      onshowmyasset: false,
    })
  },

  //查取消弹窗
  modalcancel: function() {
    this.setData({
      onshow: false,
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
    this.getrank();

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
    var that = this;

    //判断是否有数据，有则更新

    // 目前第一版先不做更新的



    //无则新增


    db.collection('users').add({
      data: {
        date: new Date(),
        avatarUrl: that.data.avatarUrl,
        nickname: that.data.nickname,
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
          onshow: false,
          exist: false,
        })
        that.getTotal();




      },
      fail: console.error,
    })


  },

  //弹出框函数
  onshow: function(e) {

    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo,
        nickname: e.detail.userInfo.nickName,
      })
    } else return

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
        title: '需要￥' + sum + '，金额不足',
        icon: 'success',
        duration: 2000
      })
      return
    }








    //往stock里面塞数据
    var stock = this.data.stock;

    for (var i = 0; i < 10; i++) {
      stock[i].hold = parseInt(arr[i]) || 0
      stock[i].price = price[i].price
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
            renewHold: true,

            totalAssets: totalAssets.toFixed(2),
            stock: res[1].result.data[0].stock,

          })
          wx.cloud.callFunction({
            name:'updateasset',
            data:{
              totalAssets:Number(totalAssets.toFixed(2)),
            }
          })
          .then(res=>{console.log(res)})
        }
      )







  },


  onShareAppMessage: function() {

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
  },

  //尝试collection.update









})
