import $store from "@/store/index";
class CommonUtil{
	//深拷贝
	static extend(target, sources) {
		target = JSON.parse(JSON.stringify(target))
		for (let k in sources) {
			target[k] = typeof sources[k] === 'object' ? CommonUtil.extend(sources[k]) : sources[k]
		}
		return target
	}
	//修改主题色
	static setThemeColor(themeColor){
		$store.commit('SAVE',{ //修改主题色
			item:'main',
			value:{
				themeColor:themeColor 
			}
		})
		localStorage.setItem('firstColor', themeColor)
		localStorage.setItem('secondColor', themeColor)
		document.getElementsByTagName('body')[0].style.setProperty('--first-color', themeColor);
		document.getElementsByTagName('body')[0].style.setProperty('--second-color', themeColor);
	}
	//初始化主题色
	static initColor(){		
		let storge = window.localStorage  
		let firstColor = storge.getItem('firstColor') || '#1d7c2a'
		$store.commit('SAVE',{ //ui组件配置动态主题色
			item:'main',
			value:{
				themeColor:firstColor 
			}
		})
		let secondColor = storge.getItem('secondColor') || '#00a248'
		document.getElementsByTagName('body')[0].style.setProperty('--first-color', firstColor) //css主题色
		document.getElementsByTagName('body')[0].style.setProperty('--second-color', secondColor)
	}

}
export default CommonUtil