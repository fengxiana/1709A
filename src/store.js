import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
//promise可以让action实现异步的方式
import promise from 'redux-promise'
//thunk可以让action以函数的形式去写
import thunk from 'redux-thunk'
import home from '@/reducer/home'


//配合redux插件使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
  //合并reducer
  combineReducers({
    home
  }),
  composeEnhancers(applyMiddleware(thunk, promise))
)

export {
  store
}