import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
 function CustomLinkExample ({labe,to,activeOnlyWhenExact}){
   return (
     <Router>
       <div>
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label={{name:'home'}}/>
        <OldSchoolMenuLink to="/about" label={{name:'about'}} />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
       </div>
     </Router>
   )
 }

 function OldSchoolMenuLink ({to,activeOnlyWhenExact,label}){
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={( props ) => (
        <div className={props.match ? "active" : ''}>
          {props.match ? ">" : ""}
          <Link to={to}>{label.name}</Link>
        </div>
      )}
    />
  )
 }

 function Home () {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
 }
 function About () {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

 export default CustomLinkExample

 
  // location = {
  //  pathname, // 当前路径，即 Link 中的 to 属性
  //  search, // search
  //  hash, // hash
  //  state, // state 对象
  //  action, // location 类型，在点击 Link 时为 PUSH，浏览器前进后退时为 POP，调用 replaceState 方法时为 REPLACE
  //  key, // 用于操作 sessionStorage 存取 state 对象
  //};


//<NavLink>是<Link>的一个特定版本，会在匹配上当前的url的时候给已经渲染的元素添加参数，组件的属性有

//   activeClassName(string)：设置选中样式，默认值为active
//   activeStyle(object)：当元素被选中时，为此元素添加样式
//   exact(bool)：为true时，只有当导致和完全匹配class和style才会应用
//   strict(bool)：为true时，在确定为位置是否与当前URL匹配时，将考虑位置pathname后的斜线
//   isActive(func)判断链接是否激活的额外逻辑的功能

