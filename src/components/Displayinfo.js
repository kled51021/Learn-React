import React from "react";
import './Displayinfo.scss';
import logo from './../logo.svg'
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
            <div className="display-info-container">
                <img src={logo}></img>
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
                                    <button onClick={() => this.props.HandleDeleteUser(User.id)}>Detele</button>
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
