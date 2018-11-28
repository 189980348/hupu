<template>
	<div id="wrapper">
		<mt-header title="众测-识货">
  			<router-link to="/find" slot="left">
    			<mt-button icon="back"></mt-button>
  			</router-link>
 				<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div id="zhongce-topbar">
			<img src="../../assets/images/banner15.png" alt="" />
			<h3>静水流深——安踏 汤普森KT4篮球鞋众测</h3>
				<span>数量<strong>5</strong></span>
				<span>已申请<strong>2648</strong></span>
			<router-link to="">查看详情</router-link>
		</div>
		<div class="border-inner"></div>
		<div id="zhongce-hot">
			<div class="hot-title">
				<h2>热门众测</h2>
				<router-link to="">更多众测></router-link>
			</div>
			<div class="swiper-container">
    		<div class="swiper-wrapper">
      			<div class="swiper-slide"><img src="../../assets/images/shouji.jpg" alt="" /><p>有颜有内涵——360手机 N7 Pro 全网...</p><span>数量<strong>3</strong></span><span>已申请<strong>6575</strong></span></div>
    			<div class="swiper-slide"><img src="../../assets/images/shouji.jpg" alt="" /><p>有颜有内涵——360手机 N7 Pro 全网...</p><span>数量<strong>3</strong></span><span>已申请<strong>6575</strong></span></div>
    			<div class="swiper-slide"><img src="../../assets/images/shouji.jpg" alt="" /><p>有颜有内涵——360手机 N7 Pro 全网...</p><span>数量<strong>3</strong></span><span>已申请<strong>6575</strong></span></div>
    			<div class="swiper-slide"><img src="../../assets/images/shouji.jpg" alt="" /><p>有颜有内涵——360手机 N7 Pro 全网...</p><span>数量<strong>3</strong></span><span>已申请<strong>6575</strong></span></div>
    		</div>
  			</div>
		</div>
		<div id="report">
			<div class="zc-report">
				<h2>众测报告</h2>
				<router-link to="">更多报告></router-link>
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
		<div id="footer2">
   		<ul>
      		<li><router-link to=""><img src='../../assets/images/zc1.png'>众测列表</router-link></li>
      		<li><router-link to=""><img src='../../assets/images/zc2.png'>测评广场</router-link></li>
     		<li><router-link to=""><img src='../../assets/images/zc3.png'>我的众测</router-link></li>
       </ul>
    </div>
	</div>
	
</template>

<script>
    export default{
    		data(){
			return{
				msg1:''
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
      		slidesPerView: 2,
      		spaceBetween: 35,
      		observer:true,
    		observeParents:true,
    	});
			this.$http.get('./data/find.json')
  			.then((response)=>{
    		console.log(response);
    		this.msg1=response.data.list1
  			})
		}
    }
</script>

<style scoped="">
	.swiper-slide img{
		width: 100%;
	}
	.mint-header{
		background-color:#f7f7f7;
		color:#333;
	}
	#top-bar{
		width: 100%;
	}
	#top-bar img{
		width: 10%;
		float: left;
	}
	#top-bar img:nth-of-type(2){
		float: right;
	}
	#top-bar span{
		float: left;
		display: block;
		margin:0px auto;
	}
	#zhongce-topbar{
		overflow: hidden;
		width: 100%;
	}
	#zhongce-topbar h3{
		text-align: center;
		font-weight: normal;
		font-size: 21px;
		margin:2% auto;
	}
	#zhongce-topbar img{
		width: 100%;
	}
	#zhongce-topbar span{
		padding: 4%;
		color:#999;
		float: left;
	}
	#zhongce-topbar strong{
		color:#dd1712;
	}
	#zhongce-topbar a{
		border-radius: 3px;
		color:#fff;
		background-color: #dd1712;
		float: right;
		padding:2%;
		margin:2%;
	}
	.border-inner{
		height: 0.5em;
		background-color: #f0f3f5;
		border-top: 1px solid #e6e6e6;
	}
	#zhongce-hot{
		overflow: hidden;
		padding:3%;
	}
	#zhongce-hot h2{
		float: left;;
		font-size: 16px;
	}
	#zhongce-hot a{
		margin-top: 0.5%;
		color:#278ccf;
		font-size: 12px;
		float: right;
	}
	#zhongce-hot .hot-title{
		margin-bottom: 2%;
		overflow: hidden;
	}
	.swiper-slide{
		width: 45%!important;
	}
	.swiper-slide p{
		font-size: 14px;
		margin-bottom: 5%;
	}
	.swiper-slide span{
		float: left;
		font-size: 14px;
		color:#999;
	}
	.swiper-slide span:nth-of-type(2){
		float: right;
	}
	.swiper-slide strong{
		color:#dd1712;
	}
	#report{
		overflow: hidden;
		padding:3%;
	}
	#report .zc-report h2{
		float: left;;
		font-size: 16px;
	}
	#report .zc-report a{
		margin-top: 0.5%;
		color:#278ccf;
		font-size: 12px;
		float: right;
	}
	#report .zc-report{
		margin-bottom: 2%;
		overflow: hidden;
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
  #footer2{
  	z-index: 4;
  	width: 100%;
  	position: fixed;
    bottom: 0px;
    background-color:rgba(255,255,255,.96);
    box-shadow:0 0 12px 1px rgba(0,0,0,.51);
  }
  #footer2 img{
    width:28px;
    display:block;
    margin:4px auto;
  }
  #footer2 ul{
    display: flex;
  }
  #footer2 ul li{
    flex:1;
  	font-size: 15px;
    text-align: center;
  }
  #footer2 a{
  	color: #444;
  }	
</style>