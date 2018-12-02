import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock'
import Tabs from './tabs'
import AutoComplete from './autocomplete'

const tabInfo = [
  {
    title: "one", 
    content: "I am the first"
  },
  {
    title: "two", 
    content: "I am the second"
  },
  {
    title: "three", 
    content: "I am the third"
  }
];

const users = ['Abby', 'Bob', 'Candice', 'Henry', 'Louis', 'Mark', 'Robert', 'Zoe']

const Root = () => (
  <div>
    <Clock />
    <div className="tabs-auto-container">
      <Tabs array={tabInfo} />
      <AutoComplete names={users}/>
    </div>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
