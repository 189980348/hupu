<template>
  <div id="app">
  	<div id="footer">
   	<ul>
      <li><router-link to="/shouye"><img src='./assets/images/index.png'>首页</router-link></li>
      <li><router-link to="/youhui"><img src='./assets/images/youhui.png'>优惠</router-link></li>
      <li><router-link to="/find"><img src='./assets/images/find.png'>发现</router-link></li>
      <li><router-link to="/zhuangbei"><img src='./assets/images/zhuangbei.png'>装备</router-link></li>
      <li><router-link to="/more"><img src='./assets/images/more.png'>更多</router-link></li>
    </ul>
    </div>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
}	
</script>

<style scoped>
  .router-link-active{
    color:#dd1712
  }
  img{
    width:28px;
    display:block;
    margin:0px auto;
  }
  #footer{
  	z-index: 3;
  	width: 100%;
  	position: fixed;
    bottom: 0px;
    background-color:rgba(255,255,255,.96);
    box-shadow:0 0 12px 1px rgba(0,0,0,.51);
  }
  ul{
    display: flex;
  }
  ul li{
    flex:1;
  	font-size: 10px;
    text-align: center;
  }
  a{
  	color: #444;
  }
</style>
