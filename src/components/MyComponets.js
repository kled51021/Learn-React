// class component
// function component
import React from "react";
class MyComponent extends React.Component {
    state = {
        name: "HaryPhamDev",
        address: "Hoi dan It",
        age: 26
    };
    //JSX -- có thể viết code js trong html
    render() {
        return (

            <div>
                My name is {this.state.name}
                I'm from {this.state.address}

            </div>
        );
    }
}
export default MyComponent;