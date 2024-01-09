// class component
// function component
import React from "react";
class MyComponent extends React.Component {
    //JSX -- có thể viết code js trong html
    render() {
        return (

            <div>my first component
                {Math.random()}
            </div>
        );
    }
}
export default MyComponent;