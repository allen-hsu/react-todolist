React

Jsx 有許多語法

ES6 與 ES5 的差異

export, import, export default

資料響應驅動，

解構賦值

父子組件傳遞，
父組件 --> 子組件 使用 props 傳遞

子組件-->父組件 把底下的 function 當成 callback 傳遞進子組件，讓子組件呼叫，但是需要用到 bind

bind 方法

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

PropTypes 屬性效驗，組件傳值才不會有問題

TodoItem.propTypes = {

test: PropTypes.string.isRequired,

content: PropTypes.string,

deleteItem: PropTypes.func,

index: PropTypes.number

};

//預設的 Props

TodoItem.defaultProps = {

test: "hello world"

};

https://reactjs.org/docs/typechecking-with-proptypes.html

當 props 跟 state 有變化的時候，render 就會被執行。

1. State 數據
2. JSX 模板
3. 數據 + 模板結合，生成真實 DOM，來顯示
4. state 發生改變
5. 數據 + 模板結合，生成真實的 DOM，替換原始的 DOM

缺陷 :

第一次生成一個完整的 DOM 片段

第二次生成一個完整的 DOM 片段

第二次的 DOM 替換第一次的 DOM，非常耗性能

- 虛擬 DOM

原本的

1. State 數據
2. JSX 模板
3. 數據 + 模板結合，生成真實 DOM，來顯示
4. state 發生改變
5. 數據 + 模板結合，生成真實的 DOM，並不直接替換原始的 DOM
6. 新的 DOM(DocumentFragment)和原始的 DOM 做比對，找差異
7. 找出 input 框發生變化
8. 只用新的 DOM 中的 input 元素，替換掉老的 DOM 中的 input 元素

缺陷:

性能的提升並不明顯

1. state 數據
2. JSX 模板
3. 數據 + 模板結合，生成真實的 DOM 來顯示
   <div id ='abc'><span>hello wordl</span></div>
4. 生成虛擬 DOM(虛擬 DOM) (損耗了性能)
   ['div', {id: 'abc'}, ['span', {}, 'helloworld']]
5. State 發生變化
6. 數據 + 模板 生成新的虛擬 DOM (極大的提升性能)(生成虛擬 dom 比真的 dom 消耗性能很少)
   ['div', {id: 'abc'}, ['span', {}, 'bye bye']]
7. 比較原始虛擬 DOM 和新的虛擬 DOM 的區別，找到區別是 span 中內容(極大的提升性能)
8. 直接操作 dom，改變 span 中的內容

真實 React 流程

1. state 數據
2. JSX 模板
3. 數據 + 模板結合，生成虛擬 DOM(虛擬 DOM 就是一個 JS 對象，用它來描述真實 DOM)
   ['div', {id: 'abc'}, ['span', {}, 'helloworld']]
4. 用虛擬 dom 的結構生成真實的 DOM 來顯示

   <div id ='abc'><span>hello wordl</span></div>State

5. State 發生變化
6. 數據 + 模板 生成新的虛擬 DOM (極大的提升性能)(生成虛擬 dom 比真的 dom 消耗性能很少)
   ['div', {id: 'abc'}, ['span', {}, 'bye bye']]
7. 比較原始虛擬 DOM 和新的虛擬 DOM 的區別，找到區別是 span 中內容(極大的提升性能)
   使用了 Diff 算法
8. 直接操作 dom，改變 span 中的內容

優點

1. 性能提升了
2. 它使得跨端應用得以實現。 React Native

React 的虛擬 DOM 算法採用同層比對

Ref < ----盡量不要用，可以直接操作 DOM 標籤

Ref 與 setState 用的時候會有坑，因為 setState 是異步的

所以要使用 setState 的 CallBack 結束後才操作 DOM (我猜 setState 只是改變資料，還沒進入到真實渲染，所以這時候用操作 dom 的方式，實際結構還沒被改變)

## React 生命週期

//組件即將被掛載到頁面的時候自動執行
componentWillMount() {
console.log("componentWillMount");
}

//組件被掛載到頁面之後，自動執行
componentDidMount() {
console.log("componentDidMount");
}

//組建被更新之前，他會被自動被執行
shouldComponentUpdate() {
console.log("shouldComponentUpdate");
return true;
}

//組建被更新之前，它會自動執行，但是他在 ShouldComponentUpdate 之後被執行
//如果 ShouldComponentUpdate 返回 true 它才執行
//如果返回 false，這個函數就不會被執行了
componentWillUpdate() {
console.log("componentWillUpdate");
}

//組建更新完畢之後會被執行
componentDidUpdate() {
console.log("componentDidUpdate");
}
