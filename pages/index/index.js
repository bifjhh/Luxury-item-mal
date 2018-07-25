//获取应用实例
let gdIndex = 1;
const app = getApp()
const uri = app.globalData.uri;

Page({

  /**
   * 页面的初始数据
   */
  data: {

    loadingHidden: true, // loading
    swpPage: 0,
    token: '',
    homeInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // Index/index
    let that = this;
    wx.getStorage({
      key: 'token',
      success: function (res) {
        console.log(res.data)
        that.setData({
          token: res.data
        })
      }
    })
    wx.pro.request({
      url: uri + 'Index/index',
      data: {},
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      if (res.data.code != 1) return;
      console.log(res.data)
      that.setData({
        homeInfo: res.data.data
      })
    })
  },
  swiperchange(e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  current(e) {
    this.setData({
      swpPage: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  toSearch() {
    wx.navigateTo({
      url: '/pages/index/search/search'
    })
  },
  toActivity(e) {
    let jump_type = e.currentTarget.dataset.jid;
    let tid = e.currentTarget.dataset.tid;
    console.log(tid);
    if (jump_type == 1) {
      wx.navigateTo({
        url: '/pages/index/activity/activity?tid='+tid
      })
    } else if (jump_type == 0) {
      wx.navigateTo({
        url: '/pages/shop/goods/goods'
      })
    }
  },

  toDetails() {
    wx.navigateTo({
      url: "/pages/shop/goods/goods"
    })
  },
  tollkf() {
    wx.navigateTo({
      url: '/pages/my/lxkf/lxkf'
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

})