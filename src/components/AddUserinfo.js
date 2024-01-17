import React, { useState } from "react";
/* class AddUserinfor extends React.Component {
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
} */
const AddUserinfo = (props) => {
    /* state = {
        name: "HaryPhamDev1",
        address: "Hoi dan It",
        age: 26
    }; */
    const [name, setName] = useState("")
    const [address, setAddress] = useState("Hoi dan IT")
    const [age, setAge] = useState("")
    const handleOnChange = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        /*  this.setState(
             {
                 age: event.target.value
             }
         ) */
        setAge(event.target.value)
    }
    const handleOnsubmit = (event) => {
        event.preventDefault()
        props.HandleAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1) + '-random',
                name: name,
                age: age
            }
        )

    }
    return (
        <div>
            My name is {name} and I'm {age}
            <form onSubmit={(event) => { handleOnsubmit(event) }}>
                <label>Your name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => { handleOnChange(event) }}>
                </input>
                <label>Your age: </label>
                <input
                    type="number"
                    value={age}
                    onChange={(event) => { handleOnChangeAge(event) }}>
                </input>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserinfo;