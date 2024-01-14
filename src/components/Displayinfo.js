import React from "react";
import './Displayinfo.scss';
import logo from './../logo.svg'
class Displayinfo extends React.Component {
    constructor(props) {
        console.log("call constrcutor : 1")
        super(props)
        this.state = {
            isShowListUser: true
        }
    }
    componentDidMount() {
        console.log('>>> call me component did mount')
        setTimeout(() => {
            document.title = "Hello"
        }, 3000);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(">>> call me component did update", this.props, prevProps)
        if (this.props.ListUser !== prevProps.ListUser) {
            if (this.props.ListUser.length === 5) {
                alert("You got 5 user")
            }
        }


    }

    ShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log(">> call me render")
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
