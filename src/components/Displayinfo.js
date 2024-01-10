import React from "react";

class Displayinfo extends React.Component {
    state = {
        isShowListUser: true

    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
            // cap nhat gia tri nguoc lai
        })
    }
    render() {
        const { ListUser } = this.props;
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {
                            ListUser.map((user, index) => {
                                return (
                                    // +user.age bien string thanh int
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )

    }
}

export default Displayinfo;
