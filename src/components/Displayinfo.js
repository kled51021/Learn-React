import React from "react";

class Displayinfo extends React.Component {
    render() {
        const { ListUser } = this.props;

        return (
            <div>
                {ListUser.map((user, index) => (
                    <div key={user.id}>
                        <div>{`My name's ${user.name}`}</div>
                        <div>{`My age is ${user.age}`}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Displayinfo;
