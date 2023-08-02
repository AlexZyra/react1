import React from "react";

const List = (props) => {
    const { items } = props;
    return (
        <ul>
            {items.map((i) => (
                <li>{i}</li>
            ))}
        </ul>
    )
}

export default List