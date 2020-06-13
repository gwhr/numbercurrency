import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
// 引入ui库
import Vant from 'vant';
import 'vant/lib/index.css';
// 工具js
import tool from "./assets/js/tool.js"
Vue.use(tool)
import './assets/js/rem.js'

// 通用样式 重置样式
import './assets/css/reset.css'

import i18n from './i18n'
Vue.use(Vant);
// 全局组件注册
const requireComponents = require.context(
  './components/assembly',
  true,
  /Base[a-zA-Z]+\.vue$/
)

requireComponents.keys().forEach(fileName=>{
  // 组件实例
  const reqCom = requireComponents(fileName)
  // 截取路径作为组件名
  let reqComName = fileName.split('.vue')[0].split('/')
  reqComName = reqComName[reqComName.length-1]
  // 组件挂载
  Vue.component(reqComName, reqCom.default || reqCom)

})
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
