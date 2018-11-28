<template>
	<div class="wrapper">
		<div id="banner">
			<div class="userface"><img src="../../assets/images/user.png" alt="" /></div>
			<div class="login">
				<router-link to='/'>登录</router-link>
				<router-link to='/'>注册</router-link>
				<p>金币0</p>
			</div>
		</div>
		<div class="menu-list">
			<span>我的识货</span>
			<ul>
				<li>
					<img src="../../assets/images/collect_content.png" alt="" />
					<p>我的收藏</p>
				</li>
				<li>
					<img src="../../assets/images/my_shaiwu.png" alt="" />
					<p>我的晒物</p>
				</li>
				<li>
					<img src="../../assets/images/kaiquan.png" alt="" />
					<p>我的礼品</p>
				</li>
			</ul>
		</div>
		<div class="menu-list">
			<span>我的海淘</span>
			<ul>
				<li>
					<img src="../../assets/images/cart.png" alt="" />
					<p>购物车</p>
				</li>
				<li>
					<img src="../../assets/images/haitao_order.png" alt="" />
					<p>海淘订单</p>
				</li>
				<li>
					<img src="../../assets/images/haitao_kefu.png" alt="" />
					<p>海淘客服</p>
				</li>
				<li>
					<img src="../../assets/images/my_address.png"" />
					<p>地址管理</p>
				</li>
			</ul>
		</div>
		<div class="menu-list">
			<span>识货必备</span>
			<ul>
				<li>
					<img src="../../assets/images/tuijiandianpu.png" alt="" />
					<p>推荐店铺</p>
				</li>
				<li>
					<img src="../../assets/images/select_shoe.png" alt="" />
					<p>黑科技选鞋</p>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default{
		
	}
</script>

<style>
	#banner{
		width: 100%;
		height: 9rem;
		background: url(../../assets/images/more-banner.png);
		background-repeat: no-repeat;
		background-size:100% auto;
		overflow: hidden;
	}
	#banner .userface{
		width: 3rem;
		height: 3rem;
		box-shadow: 0 0 10px rgba(255,255,255,5);
		border-radius: 50%;
		margin-top: 4rem;
		margin-left: 1.5rem;
		float: left;
	}
	#banner .userface img{
		width: 100%;
	}
	#banner .login{
		float:left;
		margin-top: 4.1rem;
		margin-left: 1.5rem;
		color:#fff;
		font-size: 12px;
		line-height: 22px;
	}
	#banner .login a{
		color:#fff;
		font-size: 15px;
		margin-right: 10px;
	}
	.menu-list{
		overflow: hidden;
		margin-bottom: 10%;
	}
	.menu-list span{
		color:#333;
		font-size: 14px;
		display: block;
		margin:2% 0px 4% 5%;
	}
	.menu-list ul li{
		width: 25%;
		float: left;
		text-align: center;
		font-size: 12px;
		color:#333;
	}
	.menu-list ul li img{
		width: 50%;
	}
</style>