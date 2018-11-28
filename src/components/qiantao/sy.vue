<template>
	<div class="news">
			<ul>
				<li v-for='(v,i) in msg4'>
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
				msg4:''
			}
		},
		mounted(){
			this.$http.get('./data/shouye.json')
  			.then((response)=>{
    		console.log(response);
    		this.msg4=response.data.list4
  			})
  		}
	}
</script>

<style>
</style>