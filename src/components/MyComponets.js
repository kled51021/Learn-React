import React from "react";
import Userinfor from "./Userinfo";
import Displayinfo from "./Displayinfo";
class MyComponent extends React.Component {
    state = {
        ListUser: [
            { id: 1, name: "Ngo gia bao 1 ", age: "13" },
            { id: 2, name: "Ngo gia bao 2", age: "14" },
            { id: 3, name: "Ngo gia bao 3", age: "15" },
        ]
    }
    render() {
        return (
            <div>
                <Userinfor></Userinfor>
                <br></br>
                <Displayinfo ListUser={this.state.ListUser}></Displayinfo>
                <hr></hr>
            </div >
        );
    }
}
export default MyComponent;