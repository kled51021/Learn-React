import React from "react";
class Displayinfo extends React.Component {
    state = {
        isShowListUser: true
    }
    ShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { ListUser } = this.props;
        return (
            <div>
                <div>
                    <button onClick={() => { this.ShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide" : "Show"}
                    </button>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {ListUser.map((User, index) => {
                            return (
                                <div key={User.id} className={+User.age > 18 ? "green" : "red"}>
                                    <div>My name's {User.name}</div>
                                    <div>My Age's {User.age}</div>
                                    <hr></hr>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}
export default Displayinfo;
