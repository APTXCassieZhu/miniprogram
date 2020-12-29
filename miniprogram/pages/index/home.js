// pages/index/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    swiperList:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection('swiper').get({
      success:res=>{
        console.log(res)
        this.setData({
          swiperList:res.data
        })
      },
      fail: console.error
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})