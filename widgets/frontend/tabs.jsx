import React from 'react';
import TabsHeader from './tabsheader'

class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {idx: 0};
    this.props = props;
    this.showTab = this.showTab.bind(this);
  }
  
  showTab(e) {
    let tabName = e.target.innerText;
    if (tabName === "one") {
      this.setState({idx: 0});
    } else if (tabName === "two") {
      this.setState({idx: 1});
    } else if (tabName === "three") {
      this.setState({idx: 2});
    }
  }
  
  render () {
    return (
      <div>
        <h1>Tabs</h1>
        <ul className="tabs-container">
          <header className="tabs-header-container">
            {this.props.array.map( (el, idx) => <TabsHeader showTab={ this.showTab } title={el.title} key={idx} tabNum={idx} selectedTab={this.state.idx}/>)}
          </header>
          <article className="tabs-content">
            {this.props.array[this.state.idx].content}
          </article>
        </ul>
      </div>
    )
  }

}

export default Tabs;