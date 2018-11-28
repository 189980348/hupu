<template>
	<div id="wrapper">
		<div id="banner1">
	<mt-swipe :auto="1500">
  <mt-swipe-item><img src="../../assets/images/banner1.jpg" alt="" /></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/images/banner2.png" alt="" /></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/images/banner3.jpg" alt="" /></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/images/banner4.png" alt="" /></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/images/banner5.png" alt="" /></mt-swipe-item>
	</mt-swipe>
	</div>
	<div id="title1">
	<mt-search
  		v-model="value"
  		cancel-text="取消"
  		placeholder="搜索商品，品牌">
	</mt-search>
	<a href="#"><img src="../../assets/images/me.png" alt="" /></a>
	</div>
	<div id="title-page">
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
	<div id="content1">
		<ul>
			<li v-for='(v,i) in msg1'>
			<div class="txt"><h2>{{v.h2}}</h2><p>{{v.p}}</p></div>
			<div class="pic"><img :src='v.img'/></div>
			</li>
		</ul>
	</div>
	<div id="content2">
		<a href="#" v-for='(v,i) in msg2'>
			<h2>{{v.h2}}</h2>
			<p>{{v.p}}</p>
			<p><img :src='v.img' alt="" /></p>
		</a>
	</div>
	<div id="content3">
		<h3>热门活动</h3>
		<ul>
			<li v-for='(v,i) in msg3'>
				<img :src='v.img' alt="" />
				<p>{{v.p}}</p>
				<span>{{v.span}}</span>
			</li>
		</ul>
	</div>
	<a href="#" id="middle"><img src="../../assets/images/middle.png"></a>
	<div class="content4">
	<div class="list-menu">
		<div class="list-top">
			<ul>
				<li class="on"><router-link to='/sy'>推荐</router-link></li>
				<li><router-link to='/lq'>篮球</router-link></li>
				<li><router-link to='/pb'>跑步</router-link></li>
				<li><router-link to='/js'>健身</router-link></li>
				<li><router-link to='/cl'>潮流</router-link></li>
			</ul>
		</div>
		<div class="list-bottom" v-cloak>
			<ul>
				<li class="on"><router-link to='/qb' @click="ck(1)" :class="{'shouye':num==1}">全部</router-link></li>
				<li><router-link to='/dp' @click="ck(2)" :class="{'shouye':num==2}">单品推荐</router-link></li>
				<li><router-link to='/yc' @click="ck(3)" :class="{'shouye':num==3}">原创精选</router-link></li>
				<li><router-link to='/yh' @click="ck(4)" :class="{'shouye':num==4}">用户晒物</router-link></li>
			</ul>
		</div>
	</div>
	<router-view></router-view>
	
	</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				msg1:'',
				msg2:'',
				msg3:'',
				msg4:'',
				num:1
			}
		},
		methods:{
			ck(index){
				this.num=index;
				console.log(this.n)
			}
		},
		mounted(){
			this.$http.get('./data/shouye.json')
  			.then((response)=>{
    		console.log(response);
    		this.msg1=response.data.list1
    		this.msg2=response.data.list2
    		this.msg3=response.data.list3
    		this.msg4=response.data.list4
  			})
			
			
			$('input').click(function(){
				$('#title-page').css({'display':'block'})
			})
			$('.mint-searchbar-cancel').click(function(){
				$('#title-page').css({'display':'none'})
			})
			$('.list-top ul li').click(function(){
				$(this).addClass('on').siblings('li').removeClass('on')
			})
			$('.list-bottom ul li').click(function(){
				$(this).addClass('on').siblings('li').removeClass('on')
			})
			
		}
	}
</script>

<style>
	[v-cloak]{
				display: none;
			}
	#banner1 .mint-swipe-items-wrap{
		padding-bottom:50.4%;
		position: relative;
		}
	#banner1 img{
		width: 100%;
	}
	.mint-swipe-indicators{
		bottom: 5px;
		left: 80%;
	}
	.mint-searchbar-inner{
		background-color: #EAEAEA;
	}
	input{
		background-color: #EAEAEA;
	}
	#title1{
		position: absolute;
		top: 0;
		width: 100%;
	}
	.mint-search{
		width: 87%;
		height: 9vh;
		float: left;
	}
	.mint-searchbar{
		z-index: 3;
		background-color: transparent;
	}
	#title1 a{
		width: 11%;
		float: right;
		margin-right: 5px;
		color:#666;
	}
	#title1 img{
		width:80%;
		margin-top:10px;
	}
	#title-page{
		background-color: #fff;
		position: fixed;
		top:0px;
		width: 100%;
		height: 100%;
		display: none;
		z-index: 2;
	}
	#title-page .inner{
		width: 100%;
		position: absolute;
		top:4rem;
		padding: 2%;
	}
	#title-page .inner dt{
		color:#999;
		font-size: 15px;
	}
	#title-page .inner dd{
		width: 100%;
		margin:5% auto;
	}
	#title-page .inner dd a{
		padding:2%;
		border:1px solid #ececec;
		color:#000;
		font-size: 14px;
	}
	#title-page .inner a.qk{
		width: 100%;
		border:none;
		display: block;
		text-align: center;
		color:#dd1712;
		margin-left:-3%;
	}
	#page{
		width: 100%;
		height: 100%;
		background-color: #fff;
	}
	#content1{
		overflow: hidden;
		border-bottom: 1px solid #e6e6e6;
	}
	#content1 li{
		width: 50%;
		float: left;
	}
	#content1 .txt{
		width:55%;
		float: left;
		font-size: 12px;
		color:#666666;
		margin-left:10%;
		margin-top: 5%;
	}
	#content1 .txt h2{
		color:#000;
		font-size: 15px;
	}
	#content1 .pic img{
		width:27%;
	}
	#content2{
		overflow: hidden;
		background-color:#f0f3f5;
	}
	#content2 a{
		margin:1%;
		padding:1%;
		float: left;
		width: 29.3%;
		background-color: #fff;
	}
	#content2 h2{
		margin-top: 5px;
		font-size: 14px;
		text-align: center;
		color:#000;
		font-weight: 200;
	}
	#content2 p{
		margin-top: 5px;
		color:#787878;
		text-align: center;
		font-size: 12px;
	}
	#content2 p img{
		width: 50%;
	}
	#content3{
		overflow: hidden;
	}
	#content3 h3{
		color:#444444;
		font-size: 14px;
		padding:2.5%;
	}
	#content3 ul li{
		margin:1%;
		padding: 1%;
		width: 29%;
		float: left;
	}
	#content3 img{
		width: 100%;
	}
	#content3 p{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 13px;
		font-weight:600;
	}
	#content3 span{
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 0.1em;
		color:#666;
	}
	#middle{
		width: 100%;
		margin:5px 0px;
		display: block;
		margin-bottom: 10px;
	}
	#middle img{
		width: 100%;
	}
	.content4{
		overflow: hidden;
	}
	.content4 .list-menu{
		width: 100%;
		overflow: hidden;
	}
	.content4 .list-top{
		overflow: hidden;
	}
	.content4 .list-top ul li{
		width:20%;
		float: left;
		text-align: center;
		font-weight: 900;
		position: relative;
		line-height: 32px;
	}
	.content4 .list-top a{
		color:#000;
	}
	.content4 .list-top  ul li.on:after{
		content:"";
		width:20px;
		height: 3px;
		left: 50%;
		bottom:1px;
		margin-left: -10px;
		background-color: #dd1712;
		position: absolute;
	}
	.content4 .list-bottom{
		overflow: hidden;
		margin-top: 5px;
	}
	.content4 .list-bottom a{
		color:#000;
	}
	.content4 .list-bottom .router-link-active{
		color:#fff;
	}
	.content4 .list-bottom ul{
		display: flex;
		padding:1%;
	}
	.content4 .list-bottom ul li{
		text-align: center;
		float: left;
		line-height: 20px;
		border-radius: 2px;
		line-height: 30px;
		flex:1;
		font-size: 15px;
		background-color: #f5f5f5;
	}
	.content4 .list-bottom ul li.on{
		color:#fff;
		background-color: #dd1712;
	}
	.news ul li{
		padding: 3%;
		overflow: hidden;
	}
	 .news ul li img{
		width: 30%;
		float: left;
	}
	 .news ul li .right{
		font-size: 14px;
		width: 69%;
		float: right;
		word-break:break-all;
	}
	 .news ul li .right h2{
		font-size: 15px;
		font-weight: normal;
	}
	 .news ul li .right p{
		margin-top:10%;
		margin-bottom: 10%;
	}
	 .news ul li .right p img{
		width: 4%;
	}
	 .news ul li .right p{
		position: relative;
	}
	 .news ul li .right p img:nth-of-type(2){
		position:absolute;
		bottom:0;
		top:4px;
	}
	 .news ul li .right strong{
		color:#dd1712;
	}	
</style>