import React from "react";
class Displayinfo extends React.Component {
    render() {
        const { age, name, myinfor } = this.props
        // destructuring array // object
        console.log(this.props)
        return (
            <div>
                <div>My name {name}</div>
                <div>My age {age}</div>
                <div>My info: {myinfor}</div>
            </div>
        )
    }
}
export default Displayinfo;