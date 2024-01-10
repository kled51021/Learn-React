import React from "react";
import Userinfor from "./Userinfo";
class MyComponent extends React.Component {
    //JSX -- có thể viết code js trong html
    render() {
        return (
            <div>
                <Userinfor></Userinfor>
            </div >
        );
    }
}
export default MyComponent;