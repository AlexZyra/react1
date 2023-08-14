import React, { memo } from 'react';
import ListA from './ListA';

const Widget = (props) => {
  const {users} = props 
  return (
    <div>
    {/* <div>Widget</div>
        <ListA /> */}
        {/* <div>Widget</div> */}
      {/* <p>Count from another component: {count}</p> */}
      {/* <ul>
        {users && users.length > 0 && users.map((i) => <li key={i.id}>{i.name}</li>)}
      </ul> */}
    </div>

  )
}

export default memo(Widget) 