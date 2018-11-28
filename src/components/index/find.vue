<template>
	<div id="wrapper">
	<div id="banner">
	<mt-swipe :auto="1500">
  		<mt-swipe-item><img src="../../assets/images/banner10.jpg" alt="" /></mt-swipe-item>
  		<mt-swipe-item><img src="../../assets/images/banner11.jpg" alt="" /></mt-swipe-item>
  		<mt-swipe-item><img src="../../assets/images/banner12.jpg" alt="" /></mt-swipe-item>
  		<mt-swipe-item><img src="../../assets/images/banner13.png" alt="" /></mt-swipe-item>
 		<mt-swipe-item><img src="../../assets/images/banner14.jpg" alt="" /></mt-swipe-item>
	</mt-swipe>
	</div>
	<div id="option">
		<router-link to='/zhongce'><img src="../../assets/images/icon-zhongce.png" alt="" /><span>众测</span></router-link>
		<router-link to='/lanmu'><img src="../../assets/images/icon-huati.png" alt="" /><span>栏目</span></router-link>
		<router-link to='/zuixin'><img src="../../assets/images/icon-new.png" alt="" /><span>最新</span></router-link>
		<router-link to='/zuire'><img src="../../assets/images/icon-hot.png" alt="" /><span>最热</span></router-link>
	</div>
	<div id="hot-topic">
		<h3>热门话题</h3>
			<div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide ht"><img src="../../assets/images/lb1.jpg" alt="" /><p># 晒双十一战利品，送KD11 #</p></div>
		      <div class="swiper-slide ht"><img src="../../assets/images/lb1.jpg" alt="" /><p># 晒双十一战利品，送KD11 #</p></div>
		      <div class="swiper-slide ht"><img src="../../assets/images/lb1.jpg" alt="" /><p># 晒双十一战利品，送KD11 #</p></div>
		      <div class="swiper-slide ht"><img src="../../assets/images/lb1.jpg" alt="" /><p># 晒双十一战利品，送KD11 #</p></div>
		      <div class="swiper-slide ht"><img src="../../assets/images/lb1.jpg" alt="" /><p># 晒双十一战利品，送KD11 #</p></div>
		    </div>
  	</div>
	</div>
	<div id="news">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide tj on">今日推荐</div>
		      <div class="swiper-slide tj">最新资讯</div>
		      <div class="swiper-slide tj">评测All Star</div>
		      <div class="swiper-slide tj">潮流穿搭</div>
		      <div class="swiper-slide tj">装备党</div>
		      <div class="swiper-slide tj">欲望清单</div>
		      <div class="swiper-slide tj">潮鞋志</div>
		      <div class="swiper-slide tj">球鞋90秒</div>
		      <div class="swiper-slide tj">流行元素</div>
		      <div class="swiper-slide tj">3C新奇特</div>
		      <div class="swiper-slide tj">攻略双十一</div>
		    </div>
  		</div>
	</div>
	<div id="xinwen">
			<ul>
				<li v-for='(v,i) in msg1'>
					<div class="top">
					<img :src="v.img" alt="" />
					<p>{{v.p1}}</p>
					<p>{{v.p2}}</p>
					</div>
					<div class="content">
					{{v.content}}
					<p><img :src="v.pi" alt="" /></p>
					<span><img src="../../assets/images/love.png" alt="" />{{v.sp1}}</span>
					<span><img src="../../assets/images/talk.png" alt="" />{{v.sp2}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				msg1:'',
			}
		},
		mounted(){
			$(document).ready(function () {
		var swiper = new Swiper('.swiper-container', {
      	 slidesPerView: 4,
     	 	 spaceBetween:10,
    		});
		})
			
			this.$http.get('./data/find.json')
  			.then((response)=>{
    		console.log(response);
    		this.msg1=response.data.list1
  			})
			
			$('#news .tj').click(function(){
				$(this).addClass('on').siblings('.tj').removeClass('on')
			})
		}
	}
</script>

<style>
	#banner .mint-swipe-items-wrap{
		padding-bottom:36%;
		position: relative;
		}
	#banner img{
		width: 100%;
	}
	.mint-swipe-indicators{
		bottom: 5px;
		left: 83%;
	}
	#option{
		margin:1%;
		padding:1%;
		display: flex;
	}
	#option a{
		flex:1;
		line-height: 1.5em;
	}
	#option a img{
		width: 40%;
		display: block;
		margin:0px auto;
	}
	#option span{
		text-align: center;
		display: block;
		color:#666;
		font-size: 13px;
	}
	#hot-topic h3{
		padding:3%;
		font-size: 14px;
		font-weight: normal;
	}
	#hot-topic .ht{
		position: relative;
		width: 35%!important;
		margin-right: 0px !important;
		padding-left:0.6rem;
		font-size: 12px;
		text-align: center;
	}
	#hot-topic .ht img{
		width: 100%;
	}
	#hot-topic .ht p{
		width: 70%;
		color:#fff;
		top:20px;
		left:25px;
		position: absolute;
	}
	.swiper-container {
      width: 100%;
    }
    #news{
    	border-top: 1px solid #ececec;
    	border-bottom: 1px solid #ececec;
    }
	#news .tj{
    	width: 24%;
    	padding:2%;
    	font-size: 13px;
    	text-align: center;
    	margin-right: 0% !important;
    }
    #news .tj.on{
    	color:#dd1712;
    }
    #news .tj.on:after{
		content:"";
		width:30px;
		height:2px;
		left: 50%;
		bottom:1px;
		margin-left: -13px;
		background-color: #dd1712;
		position: absolute;
	}
	#xinwen ul li{
		width: 100%;
		margin-bottom: 3%;
	}
	#xinwen{
		padding:3%;
		border-bottom: 1px solid #e6e6e6;
	}
	#xinwen .top{
		width: 100%;
		overflow: hidden;
	}
	#xinwen .top img{
		width: 10%;
		float: left;
		border-radius: 50%;
	}
	#xinwen .top p{
		font-size:13px;
		margin-left: 15%;
	}
	#xinwen .top p:nth-of-type(2){
		font-size: 12px;
		color:#999;
	}
	#xinwen .content{
		color:#222;
		font-size: 15px;
		margin-left: 15%;
	}
	#xinwen .content img{
		width: 100%;
	}
	#xinwen .content p{
		margin:3% auto;
	}
	#xinwen .content span img{
		width:5%;
		margin-right: 2%;
	}
</style>