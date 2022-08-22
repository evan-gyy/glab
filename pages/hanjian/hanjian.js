// pages/hanjian/hanjian.js
var app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		audioPath: "",
		temp: ""
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		var that = this;
		that.setData({
			audioPath: app.globalData.audioPath + "dxl/",
		});
		wx.getStorage({
			key: 'temp',
			success (res) {
				that.setData({
					temp: res.data
				})
				console.log(that.data.temp)
			},
		})
		that.audioContext = wx.createInnerAudioContext();
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	},

	onShareTimeline: function(){
    
  },

	play(e) {
		let nid = e.currentTarget.dataset.nid;
		let temp = this.data.temp;
		let path = this.data.audioPath + nid + '.aac' + temp;
		console.log(temp);
		this.audioContext.src = path;
		this.audioContext.play();
	},

	stop() {
		this.audioContext.stop();
	},

	clearStorage() {
		let rand = Math.floor(Math.random()*100 + 1);
		let temp = "?temp=" + rand;
		this.setData({
			temp: temp
		})
		wx.setStorage({
			key: 'temp',
			data: temp
		})
		console.log(this.data.temp)
	}
	
})