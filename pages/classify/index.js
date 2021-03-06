var app = getApp()
Page({
	data: {
		brandList: [],
		nav: [],
		goodsList: [],
		is_show: 1,
		curNav: '',
	},
	onLoad: function () {
		var that = this

	},

	//事件处理函数
	switchRightTab: function (e) {
		let that = this;
		let id = e.target.dataset.id;
		that.setData({
			curNav: id
		})

		that.getGoods(that, id)
	},
	show(e) {
		var that = this;
		var is_show = e.target.dataset.show * 1;
		that.setData({
			is_show
		})
	},
	toPage(e) {
		let that = this;
		let url = e.currentTarget.dataset.url
		wx.navigateTo({
			url: url
		})
	},
	onLoad: function (options) {
		let that = this
		wx.$http('Index/brandList').then(res => {
			that.setData({
				brandList: res.data.data
			})
			console.log(res.data.data)
		})
		wx.$http('Index/cateList').then(res => {
			that.setData({
				nav: res.data.data,
				curNav:res.data.data[0].cate_id
			})
			that.getGoods(that, res.data.data[0].cate_id)
		})


	},

	getGoods(that, id) {
		wx.$http('Index/cateList', {
			pid: id
		}).then(res => {
			that.setData({
				goodsList: res.data.data
			})
		})
	}
})