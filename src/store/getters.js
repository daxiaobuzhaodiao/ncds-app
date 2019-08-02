// 闭包中的 state 参数 是 index.js 中的 state
export const isAuthenticated = function (state) {
    return state.isAuthenticated
}

// 以下两种写法是上面的简写
export const user = state => state.user
export const openId = state => state.openId
export const patient = state => state.patient