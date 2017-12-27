import React, { Component } from 'react';
import './style.css';
export default class Tabs extends Component {
  state={
    current: ''
  }

  constructor(props){
    super(props);

    this.state={
      current: props.tabs[0].key
    }
  }

  renderLabel(label){
    if(typeof label === 'function'){
      return label();
    }else{
      return label;
    }
  }

  renderTab(tab){
    const active = this.state.current === tab.key ? 'active' : '';

    return (
      <div className={`Tabs-item ${active}`}
        onClick={()=>{
          this.setState({
            current: tab.key
          });

          this.props.onClick(tab.key);
        }}>

        {this.renderLabel(tab.label)}
      </div>
    )

  }

  renderTabs(){
    return this.props.tabs.map((tab)=>{
      return this.renderTab(tab);
    });
  }

  render(){
    return (
      <div className='Tabs'>
        {this.renderTabs()}
      </div>
    );
  }
}
