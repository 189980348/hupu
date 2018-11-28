<template>
	<div id="wrapper">
	<div id="batten">
	<mt-search
  		v-model="value"
  		cancel-text="取消"
  		placeholder="搜索全网低价好劵">
	</mt-search>
	<a href="#"><img src="../../assets/images/shenglve.png" alt="" /></a>
	</div>
	<div id="menu1">
		<ul>
			<li><img src="../../assets/images/menu1.png" alt="" /><p>热销排行</p></li>
			<li><img src="../../assets/images/menu2.png" alt="" /><p>好价精选</p></li>
			<li><img src="../../assets/images/menu3.png" alt="" /><p>当季新款</p></li>
		</ul>
	</div>
	<div id="banner-area">
		<img src="../../assets/images/banner6.png" alt="" />
		<div class="bg"></div>
		<div class="bask-txt">
			<span>篮球BASKETBALL</span>
			<img src="../../assets/images/ban-go.png" alt="" />
			<p>预算500推荐</p>
		</div>
		<div class="left"><img src="../../assets/images/ban-1.png" alt="" /></div>
		<div class="right"><img src="../../assets/images/ban-2.png" alt="" /></div>
	</div>
	<div id="tag-area">
		<ul>
			<li v-for='(v,i) in msg2'>{{v.name}}
			</li>
		</ul>
	</div>
	<div id="banner-area">
		<img src="../../assets/images/banner7.png" alt="" />
		<div class="bg"></div>
		<div class="bask-txt">
			<span>跑步RUNNING</span>
			<img src="../../assets/images/ban-go.png" alt="" />
			<p>户外跑鞋选购</p>
		</div>
		<div class="left"><img src="../../assets/images/ban-1.png" alt="" /></div>
		<div class="right"><img src="../../assets/images/ban-2.png" alt="" /></div>
	</div>
	<div id="tag-area">
		<ul>
			<li v-for='(v,i) in msg3'>{{v.name}}</li>
		</ul>
	</div>
	<div id="banner-area">
		<img src="../../assets/images/banner8.png" alt="" />
		<div class="bg"></div>
		<div class="bask-txt">
			<span>潮流CASUAL</span>
			<img src="../../assets/images/ban-go.png" alt="" />
			<p>radium 格子衬衫 等8款超低价</p>
			<p>年度鞋款回顾</p>
		</div>
		<div class="left"><img src="../../assets/images/ban-1.png" alt="" /></div>
		<div class="right"><img src="../../assets/images/ban-2.png" alt="" /></div>
	</div>
	<div id="tag-area">
		<ul>
			<li v-for='(v,i) in msg4'>{{v.name}}</li>
		</ul>
	</div>
	<div id="banner-area">
		<img src="../../assets/images/banner9.png" alt="" />
		<div class="bg"></div>
		<div class="bask-txt">
			<span>健身FITNESS</span>
			<img src="../../assets/images/ban-go.png" alt="" />
			<p>Landcase 干湿分离旅行训练包 TLD643, 奔跑希希 专业运动内衣 XH0193, 奔跑希希 防震美背运动内衣 WX724, 奔跑希希 高腰运动健身裤 CK1116</p>
			<p>谁说女子不如男</p>
		</div>
		<div class="left"><img src="../../assets/images/ban-1.png" alt="" /></div>
		<div class="right"><img src="../../assets/images/ban-2.png" alt="" /></div>
	</div>
	<div id="tag-area">
		<ul>
			<li v-for='(v,i) in msg5'>{{v.name}}</li>
		</ul>
	</div>
	<div id="tj">
		<h3>最新推荐</h3>
		<ul>
			<li v-for='(v,i) in msg1'>
				<img :src='v.img' alt="" />
				<div class="right">
					<p>{{v.p1}}</p>
					<p><img src="../../assets/images/zuobiao.png" alt="" style="margin-right: 10px;"/>
					{{v.p2}}
					<img src="../../assets/images/youbiao.png" alt="" style="margin-left: 10px;"/>
					</p>
					<span>{{v.sp1}}<strong>￥{{v.strong}}</strong></span>
					<span><img src="../../assets/images/eyes.png" alt=""/>{{v.sp2}}</span>
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
				msg2:'',
				msg3:'',
				msg4:'',
				msg5:''
			}
		},
		mounted(){
			this.$http.get('./data/zhuangbei.json')
  			.then((response)=>{
    		console.log(response);
    		this.msg1=response.data.list1
    		this.msg2=response.data.list2
    		this.msg3=response.data.list3
    		this.msg4=response.data.list4
    		this.msg5=response.data.list5
  			})
		}	 
	}
</script>

<style>
	#batten{
		overflow: hidden;
		width: 100%;
	}
	.mint-search{
		width: 87%;
		height: 7vh;
		float: left;
	}
	.mint-searchbar{
		width: 100%;
		float: left;
		background-color: #fff;
	}
	.mint-searchbar-inner{
		background-color: #ebebeb;
		height: 20px;
	}
	.mint-searchbar-core{
		background-color: #ebebeb;
	}
	#batten a{
		width: 11%;
		float: right;
		margin-right: 5px;
	}
	#batten img{
		width:65%;
		margin-top:10px;
	}
	#menu1{
		margin-top: 3%;
		margin-bottom: 3%;
	}
	#menu1 ul{
		display: flex;
	}
	#menu1 ul li{
		flex:1;
		float: left;
		text-align: center;
		line-height: 25px;
		font-size: 15px;
	}
	#menu1 ul li:nth-of-type(2){
		border-left: 1px solid #d4d4d4;
		border-right: 1px solid #d4d4d4;
	}
	#menu1 img{
		width:16%;
	}
	#menu1 ul li:nth-of-type(1) img{
		width: 30%;
	}
	#banner-area{
		width: 100%;
		height: 30%;
		position: relative;
		overflow: hidden;
	}
	#banner-area img{
		width: 100%;
	}
	#banner-area .bg{
		width: 100%;
		height: 98%;
		position:absolute;
		top:0;
		left:0;
		background-color: #000;
		opacity: 0.5;
	}
	#banner-area .bask-txt{
		width: 100%;
		position:absolute;
		top:20px;
		left: 0;
		color:#fff;
		text-align: center;
	}
	#banner-area .bask-txt span{
		font-size: 25px;
		font-weight: 300;
	}
	#banner-area .bask-txt img{
		width: 6%;
	}
	#banner-area .bask-txt p{
		margin:0px auto;
		width: 80%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 14px;
	}
	#banner-area .left{
		position: absolute;
		top:20%;
		left:5%;
	}
	#banner-area .left img{
		width: 50%;
	}
	#banner-area .right{
		position: absolute;
		top:20%;
		right:1%;
	}
	#banner-area .right img{
		width: 50%;
	}
	#tag-area ul{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 3%;
	}
	#tag-area ul li{
		min-width: 24%;
		height: 3em;
		font-size: 14px;
		border:1px solid #ececec;
		flex:1;
		line-height: 3em;
		text-align: center;
	}
	#tj h3{
		font-weight:normal;
		padding-bottom: 3%;
		padding-left: 3%;
		font-size: 15px;
	}
	#tj ul li{
		padding:2%;
		overflow: hidden;
		border-bottom: 1px solid #D4D4D4;
	}
	#tj ul li img{
		width: 35%;
		float: left;
	}
	#tj ul li .right{
		padding-left: 2%;
		padding-right: 2%;
		font-size: 14px;
		width: 61%;
		float: right;
		word-break:break-all;
	}
	#tj ul li .right p{
		margin-bottom: 10%;
	}
	#tj ul li .right p img{
		width: 6%;
	}
	#tj ul li .right span{
		display: block;
		float: left;
	}
	#tj ul li .right span strong{
		color:#dd1712;
	}
	#tj ul li .right span:nth-of-type(2){
		float: right;
	}
	#tj ul li .right span:nth-of-type(2) img{
		width: 40%;
		margin-right: 10%;
		margin-top: 7%;
	}
	#tj ul li .right p:nth-of-type(2){
		position: relative;
	}
	#tj ul li .right p:nth-of-type(2) img:nth-of-type(2){
		position:absolute;
		bottom:0;
	}
</style>