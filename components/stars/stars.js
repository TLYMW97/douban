// compontents/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate: {
      type: Number,
      value: 0
    },
    starsize: {
      type: Number,
      value: 20 //rpx
    },
    fontsize: {
      type: Number,
      value: 20 //rpx
    },
    fontcolor: {
       type: String,
       value: "#ccc"
    },
    istext: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes: {
    attached: function() {
      var that = this;
      var rate = that.properties.rate;
      var intRate = parseInt(rate);
      var light = parseInt(intRate/2);
      var half = intRate%2;
      var gray = 5 - light - half;
      var lights = [];
      var halfs = [];
      var grays = [];
      for(var index=1; index <= light; index++) {
        lights.push(index);
      }
      for (var index = 1; index <= half; index++) {
        halfs.push(index);
      }
      for (var index = 1; index <= gray; index++) {
        grays.push(index);
      }
      var ratetext = rate && rate > 0 ? rate.toFixed(1) : "未评分"
      this.setData({
        lights: lights,
        halfs: halfs,
        grays: grays,
        ratetext: ratetext
      })
    }
  }
})
