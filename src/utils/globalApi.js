let globalApi = {};
// 全局api引入
const requireApi = require.context(
    '../assets/api',
    true,
    /\.js$/
)
requireApi.keys().forEach(v=>{
    let name = v.replace(/(.*\/)*([^.]+).*/ig,"$2");
    globalApi[name] = requireApi(v);
})
export default globalApi