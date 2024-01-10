import React from "react";
import Userinfor from "./Userinfo";
import Displayinfo from "./Displayinfo";
class MyComponent extends React.Component {
    //JSX -- có thể viết code js trong html
    render() {
        const myage = ["abb", "c", "c"]
        const myinfor = ["a"]
        return (
            <div>
                <Userinfor></Userinfor>
                <br></br>
                <Displayinfo name="Hoi dan It" age="18"></Displayinfo>
                <hr></hr>
                <Displayinfo name="Eric" age={myage} myinfor={myinfor}></Displayinfo>
            </div >
        );
    }
}
export default MyComponent;