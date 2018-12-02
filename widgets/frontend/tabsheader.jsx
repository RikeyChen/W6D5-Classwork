// <ul>
//   <TabsHeader />
// </ul>

import React from 'react';

const TabsHeader = (props) => {
  const active = props.selectedTab === props.tabNum ? "active" : "";
  return (
    <li onClick={props.showTab} className={active}>
      {props.title}
    </li>
)};

export default TabsHeader;