import React, { useEffect, useState } from "react";
import './Displayinfo.scss';
import logo from './../logo.svg'
/* class Displayinfo extends React.Component {
    render() {
        console.log(">> call me render")
        const { ListUser } = this.props;
        return (
            <div className="display-info-container">

                {true &&
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
} */
const Displayinfo = (props) => {
    const { ListUser } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true) //hook
    const HandleShowHide = () => {
        setShowHideListUser(!isShowHideListUser)

    }
    console.log("<<< call me render")
    useEffect(() => {
        if (ListUser.length === 0) {
            alert("You delete all the users")
        }
        console.log("<<< call me Effect")
    }, [ListUser])
    return (
        <div className="display-info-container" >
            <div>
                <button onClick={() => HandleShowHide()}>
                    {isShowHideListUser === true ? "Hide list user " : "Show list user"}
                </button>
            </div>
            {isShowHideListUser &&
                <div>
                    {ListUser.map((User, index) => {
                        return (
                            <div key={User.id} className={+User.age > 18 ? "green" : "red"}>
                                <div>My name's {User.name}</div>
                                <div>My Age's {User.age}</div>
                                <button onClick={() => props.HandleDeleteUser(User.id)}>Detele</button>
                                <hr></hr>
                            </div>
                        )
                    })}
                </div>
            }

        </div >

    )
}
export default Displayinfo;
