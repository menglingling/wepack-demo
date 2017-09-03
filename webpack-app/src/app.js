import Layer from './components/layer/layer.js';

import './css/common.css';
const App=function(){
  console.log(Layer)
  let dom=document.getElementById("app");
  let layer =new  Layer();
  dom.innerHTML=layer.tpl({
    name:'john',
    arr:['apple','orange','banana']
  });
}
new App()

import layerless from './components/layer/layer.less'