import React from "react";
import AddUserinfo from "./AddUserinfo";
import Displayinfo from "./Displayinfo";
class MyComponent extends React.Component {
    state = {
        ListUser: [
            { id: 1, name: "Harry", age: "19" },
            { id: 2, name: "Gia Bao", age: "69" },
            { id: 3, name: "Harry Pham", age: "15" },
        ]
    }
    HandleAddNewUser = (userObj) => {
        console.log(userObj)
        /*  let ListUserNew = this.state.ListUser
         ListUserNew.unshift(userObj)
         this.setState({
             ListUser: ListUserNew
         }
         ) */
        this.setState({
            ListUser: [...this.state.ListUser, userObj]
        })
    }
    render() {
        return (
            <div>
                <AddUserinfo HandleAddNewUser={this.HandleAddNewUser}></AddUserinfo>
                <br></br>
                <Displayinfo ListUser={this.state.ListUser}></Displayinfo>
                <hr></hr>
            </div >
        );
    }
}
export default MyComponent;