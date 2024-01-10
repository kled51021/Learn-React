import React from "react";
class Userinfor extends React.Component {
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
    handleOnChangeAge = (event) => {
        this.setState(
            {
                age: event.target.value
            }
        )
    }
    render() {
        return (
            <div>
                My name is {this.state.name}
                I'm  {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChange(event)}></input>
                    <button>Submit</button>
                    <br></br>
                    <label>Your age:</label>
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Userinfor