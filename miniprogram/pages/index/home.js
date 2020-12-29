// pages/index/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    swiperList:[],
    themes: [
      { theme_icon: 'theme@1.png', theme_name: '精品热卖', theme_type: 1 },
      { theme_icon: 'theme@2.png', theme_name: '新品上市', theme_type: 2 },
      { theme_icon: 'theme@3.png', theme_name: '经典回购', theme_type: 3 },
      { theme_icon: 'theme@4.png', theme_name: '优质推荐', theme_type: 4 },
    ],
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