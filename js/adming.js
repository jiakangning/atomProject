var ng=angular.module("static",[]);
			//左侧菜单的js
			ng.controller("menu_ctr",["$scope",function($scope){
				$scope.list=[
				{"id":1,"name":"新闻","icon":"img/icon1.png","href":"news.html"},
				{"id":2,"name":"图片","icon":"img/icon2.png","href":"pic.html"},
				{"id":3,"name":"数据","icon":"img/icon3.png","href":"data.html"},
				{"id":4,"name":"表单","icon":"img/icon4.png","href":"form.html"}
				]
			}]);
			change();
			$(window).resize(function(){
				change();
			})
			function change(){
			var $h=$(".banner").height();
	        var $wh=$(window).height();
	        var $lh=$wh-$h;
	        $(".col-lg-2").css({"height":$lh+"px"});
	        $("iframe").css({"height":$lh+"px"});
			}
	        //新闻
	        ng.controller("news",["$scope",function($scope){
				$scope.newslist=[
				{"newsimg":"img/newsimg1.jpg","title":"今天天气阴天","content":"交际费咖啡浓咖啡你看过柯尼卡润肤露封口费"},
				{"newsimg":"img/newsimg2.jpg","title":"今天天气晴天","content":"交际费咖啡浓咖啡你看过柯尼卡润肤露封口费"},
				{"newsimg":"img/newsimg3.jpg","title":"今天天气多云","content":"交际费咖啡浓咖啡你看过柯尼卡润肤露封口费"},
				{"newsimg":"img/newsimg4.jpg","title":"今天天气大雨","content":"交际费咖啡浓咖啡你看过柯尼卡润肤露封口费"},
				{"newsimg":"img/newsimg5.jpg","title":"今天天气暴雨","content":"交际费咖啡浓咖啡你看过柯尼卡润肤露封口费"}
				]
			}]);
			
			//图片
	        ng.controller("pic",["$scope",function($scope){
				$scope.piclist=[
				{"pic_url":"img/newsimg1.jpg","title":"我是pic1"},
				{"pic_url":"img/newsimg2.jpg","title":"我是pic1"},
				{"pic_url":"img/newsimg3.jpg","title":"我是pic1"},
				{"pic_url":"img/newsimg4.jpg","title":"我是pic1"},
				{"pic_url":"img/newsimg5.jpg","title":"我是pic1"}
				]
			}]);