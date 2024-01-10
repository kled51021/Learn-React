import React from "react";
class MyComponent extends React.Component {
    state = {
        name: "HaryPhamDev",
        name: "HaryPhamDev ",
        address: "Hoi dan It",
        age: 26
    };
    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    //JSX -- có thể viết code js trong html
    render() {
        return (
            <div>
                My name is {this.state.name}
                I'm  {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnChange(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default MyComponent;