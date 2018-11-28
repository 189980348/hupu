import vueRouter from 'vue-router'
import shouye from '../../components/index/shouye.vue'
import youhui from '../../components/index/youhui.vue'
import find from '../../components/index/find.vue'
import zhuangbei from '../../components/index/zhuangbei.vue'
import more from '../../components/index/more.vue'
import zhongce from '../../components/find/zhongce.vue'
import sy from '../../components/qiantao/sy.vue'
import lq from '../../components/qiantao/lq.vue'
import pb from '../../components/qiantao/pb.vue'
import js from '../../components/qiantao/js.vue'
import cl from '../../components/qiantao/cl.vue'
import qb from '../../components/qiantao/qb.vue'
import dp from '../../components/qiantao/dp.vue'
import yc from '../../components/qiantao/yc.vue'
import yh from '../../components/qiantao/yh.vue'
export default new vueRouter({
	routes:[
		{
			path:'/shouye',component:shouye,
			redirect:'/sy',
			children:[
				{
				path:'/sy',component:sy	
				},
				{
				path:'/lq',component:lq		
				},
				{
				path:'/pb',component:pb	
				},
				{
				path:'/js',component:js	
				},
				{
				path:'/cl',component:cl	
				},
				{
				path:'/qb',component:qb	
				},
				{
				path:'/dp',component:dp
				},
				{
				path:'/yc',component:yc
				},
				{
				path:'/yh',component:yh
				}
			]
		},
		{
			path:'/youhui',component:youhui
		},
		{
			path:'/find',component:find
		},
		{
			path:'/zhuangbei',component:zhuangbei
		},
		{
			path:'/more',component:more
		},
		{
			path:'/zhongce',component:zhongce
		},
		{
			path:'/',component:shouye
		}
	]
})
