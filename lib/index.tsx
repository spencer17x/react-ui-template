import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
}

ReactDOM.render(<div>
  <Icon 
    name="wechat" 
    onClick={fn} 
    onMouseEnter={() => console.log('onMouseEnter')}
    onMouseLeave={() => console.log('onMouseLeave')}  
  />
  {/* <Icon name="qq"/>
  <Icon name="alipay"/> */}
</div>, document.querySelector('#root'))