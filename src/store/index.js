import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []   //用于保存公共对象的购物车列表
  },
  getters: {  // 相当于state对象的计算属性

  },
  mutations: {
    //mutations唯一目的就是修改state中的数据
    //这里把判断的条件分解成2个事件，保证mutation内每个事件只处理一件事的原则
    addCart(state, payload) {     //1.商品添加到购物车的事件
      payload.checked = true   //商品选中状态  默认为选中
      state.cartList.push(payload)
    },
    addCounter(state, payload) {   //2.商品已存在，数量+1事件
      payload.count++
    }
  },
  actions: {   //actions内的方法用来异步提交mutations内的方法
    getAddGoods(context, payload) {      //context即store对象
      let oldProduct = null     //关键：新建一个对象，用来保存已存在的商品
      for (let item of this.state.cartList) {
        if (payload.id === item.id) {
          oldProduct = item   //保存item 即已存在商品
        }
      }
      if (oldProduct) {
        context.commit('addCounter', oldProduct) //分发: 调用addCounter事件
      } else {
        payload.count = 1
        context.commit('addCart', payload)  //分发: 调用addCart事件
      }
    }
  },
  modules: {
  }
})
