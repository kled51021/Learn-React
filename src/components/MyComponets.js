// class component
// function component
import React from "react";
class MyComponent extends React.Component {
    state = {
        name: "HaryPhamDev ",
        address: "Hoi dan It",
        age: 26
    };
    handleclick = (event) => {
        //console.log(">>>> Click me my button");
        console.log("My name is , ", this.state.name)
        console.log(" random ", Math.floor((Math.random() * 100) + 1))
        // merge State => React class
        this.setState( // update name
            {
                name: 'Eric ',
                age: (Math.floor((Math.random() * 100) + 1))
            }
        )
    }
    handleOnMouseOver(event) {
        console.log(this.state.address)
    }
    //JSX -- có thể viết code js trong html
    render() {
        return (

            <div>
                My name is {this.state.name}
                I'm  {this.state.age}
                <button onClick={(event) => { this.handleclick(event) }}>Click me</button>
                <button onMouseOver={(event) => { this.handleOnMouseOver(event) }}>Hover me</button>

            </div>
        );
    }
}
export default MyComponent;