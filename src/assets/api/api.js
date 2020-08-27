import http from '../../utils/httpaxios.js'
export const login = {
    // 登录
    login(params){
        return http.request(`/api/user/login`, 'post',params).then(value=>{
            return value
        })
    },
    // 注册
    register(params){
        return http.request(`/api/user/register`, 'post',params).then(value=>{
            return value
        })
    },
    // 獲取驗證碼
    get_phone_varcode(params){
        return http.request(`/api/user/get_phone_varcode`, 'post',params).then(value=>{
            return value
        })
    },
    // 修改密碼
    forgot_password(params){
        return http.request(`/api/user/forgot_password`, 'post',params).then(value=>{
            return value
        })
    },  
}
export const index = {
    articles(params={}){
        return http.request(`/api/articles/index`, 'post',params).then(value=>{
            return value
        })
    },
    articlesabout(params={}){
        return http.request(`/api/articles/about`, 'post',params).then(value=>{
            return value
        })
    },
    // 購買外掛
    buyMachine(params={}){
        return http.request(`/api/trade/buyMachine`, 'post',params).then(value=>{
            return value
        })
    },
}

export const user = {
    // 个人信息
    get_user_info(params={}){
        return http.request(`/api/user/get_user_info`, 'get',params).then(value=>{
            return value
        })
    },
    // 官方交流
    submitFeedback(params={}){
        return http.request(`/api/user/submitFeedback`, 'post',params).then(value=>{
            return value
        })
    },
    // 获取反馈的问题
    Feedback(params={}){
        return http.request(`/api/user/Feedback`, 'post',params).then(value=>{
            return value
        })
    },
    // 獲取銀行卡類別
    banks(params={}){
        return http.request(`/api/pay/banks`, 'get',params).then(value=>{
            return value
        })
    },
    // 添加用户提领账号
    add_bank(params={}){
        return http.request(`/api/user/add_bank`, 'post',params).then(value=>{
            return value
        })
    },
    // 充值
    recharge(params={}){
        return http.request(`/api/trade/recharge`, 'post',params).then(value=>{
            return value
        })
    },
    // 提現
    withdraw(params={}){
        return http.request(`/api/trade/withdraw`, 'post',params).then(value=>{
            return value
        })
    },
    // 赎回usdt 转成twd
    usdt_to_twd(params={}){
        return http.request(`/api/trade/usdt_to_twd`, 'post',params).then(value=>{
            return value
        })
    },
    // 购买兑换usdt
    twd_to_usdt(params={}){
        return http.request(`/api/trade/twd_to_usdt`, 'post',params).then(value=>{
            return value
        })
    },
    // 修改密碼
    change_password(params={}){
        return http.request(`/api/user/change_password`, 'post',params).then(value=>{
            return value
        })
    },
    // 修改暱稱
    change_nickname(params={}){
        return http.request(`/api/user/change_nickname`, 'post',params).then(value=>{
            return value
        })
    },
    // 修改頭像
    avatar_upload(params={}){
        return http.request(`/api/user/avatar_upload`, 'post',params).then(value=>{
            return value
        })
    },
    // 邀请信息
    get_my_share(params={}){
        return http.request(`/api/share/get_my_share`, 'post',params).then(value=>{
            return value
        })
    },
}

export const record = {
    // 收益明細
    income_log(params={}){
        return http.request(`/api/user/income_log`, 'post',params).then(value=>{
            return value
        })
    },
    // 資金明細
    twd_log(params={}){
        return http.request(`/api/user/twd_log`, 'post',params).then(value=>{
            return value
        })
    },
    // 交易实况
    tradelog(params={}){
        return http.request(`/api/sys/tradelog`, 'post',params).then(value=>{
            return value
        })
    },
}
export const coin = {
    // 行情
    price(params={}){
        return http.request(`/coins/tether`, 'get',params,' https://api.coingecko.com/api/v3/').then(value=>{
            return value
        })
    },
    // 行情
    range(params={}){
        return http.request(`/coins/bitcoin/market_chart/range?vs_currency=usd`, 'get',params,' https://api.coingecko.com/api/v3/').then(value=>{
            return value
        })
    }
}