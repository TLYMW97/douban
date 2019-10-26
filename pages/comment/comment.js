// pages/comment/comment.js
import {network} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    start: 1,
    count: 20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData(options)
    this.getComments(1);
  },

  getComments: function(start) {
    var that = this;
    var type = this.data.type;
    var id = this.data.id;
    if (start > that.data.id) {
      that.setData({
        nextLoading: true
      });
    }else{
      that.setData({
        preLoading: true
      })
    }
    network.getItemComments({
      type: type,
      id: id,
      start: start,
      count: 20,
      success: function (data) {
        var total = data.total;
        var comments = data.interests;
        that.setData({
          total: total,
          comments: comments,
          start: start,
          preLoading: false,
          nextLoading: false
        });
      }
    })
  },

  onPrePageTap: function(){
    var that = this;
    var oldStart = that.data.start;
    if (oldStart - that.data.count > 0) {
      var start = oldStart - that.data.count;
      that.getComments(start);
      wx.pageScrollTo({
        scrollTop: 0,
      });
    }
  },

  onNextPageTap: function(){
    var that = this;
    var oldStart = that.data.start;
    var start = oldStart + that.data.count;
    that.getComments(start);
    wx.pageScrollTo({
      scrollTop: 0,
    });
  },

  /**
   * 返回电影详情页
   */
  onItemTapEvent: function(event){
    wx.navigateBack({});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})