import React from "react";
class AddUserinfor extends React.Component {
    state = {
        name: "HaryPhamDev1",
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
    handleOnsubmit = (event) => {
        event.preventDefault()
        this.props.HandleAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1) + '-random',
                name: this.state.name,
                age: this.state.age
            }
        )

    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => { this.handleOnsubmit(event) }}>
                    <label>Your name: </label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => { this.handleOnChange(event) }}>
                    </input>
                    <label>Your age: </label>
                    <input
                        type="number"
                        value={this.state.age}
                        onChange={(event) => { this.handleOnChangeAge(event) }}>
                    </input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddUserinfor