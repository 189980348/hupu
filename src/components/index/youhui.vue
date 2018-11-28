<template>
	<div id="wrapper">
	<div class="title">
	<mt-search
  		v-model="value"
  		cancel-text="取消"
  		placeholder="搜索全网低价好卷">
	</mt-search>
	</div>
	<div id="title-page1">
		<div class="inner">
			<dl>
				<dt>热门搜索</dt>
				<dd>
					<a href="#">AJ11</a>
				</dd>
				<dt>历史搜索</dt>
				<dd><a href="#" class="qk">清空历史记录</a></dd>
			</dl>
		</div>
	</div>
	<div id="yhj">
		已收集&nbsp;<strong>52509</strong>&nbsp;张优惠券
		<a href="#"><img src="../../assets/images/zhinan.png"></a>
	</div>
	<div id="temai">
		<div class="tm">
		<b style="font-size: 14px;">品牌特卖</b>
		<div class="tm-right">
		<a href="#">更多品牌</a>
		<img src="../../assets/images/more2.png"/>
		</div>
		</div>
		<div class="category">
			<ul>
				<li><img src="../../assets/images/category1.png" alt="" /><p>运动</p></li>
				<li><img src="../../assets/images/category2.png" alt="" /><p>休闲</p></li>
				<li><img src="../../assets/images/category3.png" alt="" /><p>户外</p></li>
				<li><img src="../../assets/images/category4.png" alt="" /><p>数码</p></li>
				<li><img src="../../assets/images/category5.png" alt="" /><p>更多</p></li>
			</ul>
		</div>
		<div class="pinpai">
			<ul>
				<li v-for='(v,i) in msg1'>
					<img :src="v.img1" alt="" />
					<img :src="v.img2" alt="" />
					<p>{{v.p1}}</p>
					<p>{{v.p2}}</p>
				</li>
			</ul>
		</div>
	</div>
	<div id="chaozhi">
		<div class="cz">
		<b style="font-size: 14px;">超值9块9</b>
		<div class="cz-right">
		<a href="#">更多品牌</a>
		<img src="../../assets/images/more2.png"/>
		</div>
		</div>
		<div class="swiper-container">
		    <div class="swiper-wrapper sw">
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		      <div class="swiper-slide cz1"><img src="../../assets/images/cz1.jpg"/><span>金立S5手机</span><p>￥7.7</p></div>
		    </div>
  		</div>
	</div>
	<div class="shihuo"><img src="../../assets/images/1.jpg" alt="" /></div>
	<div id="list">
		<div class="menu">
			<ul>
				<li class="on">精选</li>
				<li>鞋类</li>
				<li>服饰</li>
				<li>数码</li>
				<li>兴趣</li>
				<img src="../../assets/images/xia.png" alt="" style="width: 10%; height: 10%;"/>
			</ul>
		</div>
		<div class="kind">
			<ul>
				<li v-for='(v,i) in msg2'>
					<img :src="v.img" alt="" />
					<div class="right">
						<h2>{{v.h2}}</h2>
						<strong>{{v.strong}}</strong>
						<span>{{v.sp1}}</span>
						<span>{{v.sp2}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				msg1:'',
				msg2:''
			}
		},
		mounted(){
			$(document).ready(function () {
		var swiper = new Swiper('.swiper-container', {
      	 slidesPerView: 4,
     	 	 spaceBetween:10,
    });
})
			
			this.$http.get('./data/youhui.json')
  			.then((response)=>{
    		console.log(response);
    		this.msg1=response.data.list1
    		this.msg2=response.data.list2
  			})
  			
			$('input').click(function(){
				$('#title-page1').css({'display':'block'})
			})
			$('.mint-searchbar-cancel').click(function(){
				$('#title-page1').css({'display':'none'})
			})
			$('.menu ul li').click(function(){
				$(this).addClass('on').siblings('li').removeClass('on')
			})
			
		}
	}
</script>

<style>
	.mint-searchbar{
		background-color:#f0f3f5;
	}
	.mint-searchbar-cancel{
		color:#666;
	}
	.mint-search{
		height: 6.8vh;
	}
	.title{
		overflow: hidden;
	}
	#yhj{
		color: #444;
		font-size: 13px;
		background-color:#f0f3f5;
		padding:3%;
	}
	#yhj a{
		float: right;
	}
	#yhj a img{
		width: 50%;
		float: right;
	}
	#title-page1{
		background-color: #fff;
		position: fixed;
		top:8.5%;
		width: 100%;
		height: 100%;
		display: none;
		z-index: 2;
	}
	#title-page1 .inner{
		width: 100%;
		position: absolute;
		top:4rem;
		padding: 2%;
	}
	#title-page1 .inner dt{
		color:#999;
		font-size: 15px;
	}
	#title-page1 .inner dd{
		width: 100%;
		margin:5% auto;
	}
	#title-page1 .inner dd a{
		padding:2%;
		border:1px solid #ececec;
		color:#000;
		font-size: 14px;
	}
	#title-page1 .inner a.qk{
		width: 100%;
		border:none;
		display: block;
		text-align: center;
		color:#dd1712;
		margin-left:-3%;
	}
	#temai{
		width: 100%;
	}
	#temai .tm{
		padding:3%;
	}
	#temai .tm .tm-right{
		font-size: 13px;
		float: right;
		margin-top: 0.5%;
	}	
	#temai .tm .tm-right a{
		color:#999;
	}
	#temai .tm .tm-right img{
		width: 10%;
	}
	.category ul{
		display: flex;
	}
	.category ul li{
		margin-bottom: 4%;
		text-align: center;
		font-size: 14px;
		flex:1;
	}
	.category ul li img{
		width: 60%;
	}
	#temai .pinpai{
		width: 100%;
		overflow: hidden;
	}
	#temai .pinpai ul{
		overflow: hidden;
		width: 100%;
		margin:3%;
	}
	#temai .pinpai ul li{
		margin-right: 2%;
		margin-top: 1%;
		position: relative;
		float: left;
		width: 30%;
	}
	#temai .pinpai ul li img{
		width: 100%;
	}
	#temai .pinpai ul li img:nth-of-type(2){
		position: absolute;
		width:30%;
		border-radius: 50%;
		display: block;
		top:1.5rem;
		left: 50%;
		margin-left: -15%;
	}
	#temai .pinpai ul li p:nth-of-type(1){
		font-size: 14px;
		text-align: center;
		width: 100%;
		color: #fff;
		position: absolute;
		bottom: 2.5rem;
		left: 50%;
		margin-left: -50%;
	}
	#temai .pinpai ul li p:nth-of-type(2){
		font-size: 12px;
		border-radius: 5px;
		background-color: #dd1712;
		text-align: center;
		width: 80%;
		color: #fff;
		position: absolute;
		bottom: 1rem;
		left: 50%;
		margin-left: -40%;
	}
	#chaozhi .cz{
		padding:3%;
	}
	#chaozhi .cz .cz-right{
		font-size: 13px;
		float: right;
		margin-top: 0.5%;
	}
	#chaozhi .cz .cz-right a{
		color:#999;
	}
	#chaozhi .cz .cz-right img{
		width: 10%;
	}
	#chaozhi .sw{
		margin-bottom: 5%;
	}
	#chaozhi .cz1{
		padding-left:0.6rem;
		font-size: 12px;
		text-align: center;
	}
	#chaozhi .cz1 p{
		color:#dd1712;
	}
	#chaozhi .cz1 img{
		width: 100%;
	}
	.shihuo{
		margin-bottom: 2%;
	}
	.shihuo img{
		width: 100%;
	}
	#list .menu{
		border-top: 1px solid #e6e6e6;
		border-bottom: 1px solid #e6e6e6;
		padding:3%;
	}
	#list .menu ul{
		display: flex;
	}
	#list .menu ul li{
		font-size: 14px;
		float: left;
		flex:1;
	}
	#list .menu ul li.on{
		color:#dd1712;
	}
	#list .menu ul img{
		float: right;
	}
	#list .kind{
		overflow: hidden;
		padding:3%;
	}
	#list .kind right{
		padding:2%;
	}
	#list .kind ul{
		overflow: hidden;
	}
	#list .kind ul li{
		padding:2%;
		overflow: hidden;
		border-bottom: 1px solid #e6e6e6;
	}
	#list .kind ul li .right{
		overflow: hidden;
		padding:2%;
	}
	#list .kind ul li img{
		width: 30%;
		float: left;
	}
	#list .kind ul li h2{
		font-weight: normal;
		font-size: 15px;
	}
	#list .kind ul li strong{
		margin:8% auto;
		font-size: 14px;
		color:#dd1712;
		display: block;
	}
	#list .kind ul li span{
		display: block;
		float: left;
		font-size: 14px;
		color:#999;
	}
	#list .kind ul li span:nth-of-type(2){
		float: right;
	}
	.swiper-container {
      width: 100%;
    }
</style>