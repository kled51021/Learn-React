// class component
// function component
import React from "react";
class MyComponent extends React.Component {
    state = {
        name: "HaryPhamDev",
        address: "Hoi dan It",
        age: 26
    };
    handleclick(event) {
        //console.log(">>>> Click me my button");
        console.log("My name is , ", this.state.name)
    }
    handleOnMouseOver(event) {
        console.log(event.pageX)
    }
    //JSX -- có thể viết code js trong html
    render() {
        return (

            <div>
                My name is {this.state.name}
                I'm from {this.state.address}
                <button onClick={this.handleclick}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>

            </div>
        );
    }
}
export default MyComponent;