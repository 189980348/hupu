<template>
	<div class="news">
			<ul>
				<li v-for='(v,i) in msg11'>
					<img :src="v.img" alt="" />
					<div class="right">
						<h2>{{v.h2}}</h2>
					<p>
						<img src="../../assets/images/zuobiao.png" alt="" style="margin-right: 10px; margin-top:5px;"/>
						{{v.p}}
						<img src="../../assets/images/youbiao.png" alt="" style="margin-left: 10px;"/>
					</p>
						<span>{{v.span}}<strong>{{v.strong}}</strong></span>
					</div>
				</li>
			</ul>
		</div>
</template>

<script>
	export default{
		data(){
			return{
				msg11:''
			}
		},
		mounted(){
			this.$http.get('./data/shouye.json')
  			.then((response)=>{
    		console.log(response);
    		this.msg11=response.data.list11
  			})
  		}
	}
</script>

<style>
</style>>