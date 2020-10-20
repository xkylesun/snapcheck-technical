import React from "react";
import $ from "jquery";

export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        $.ajax({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/users",
        }).then(
            (payload) => {
                this.setState({
                    users: payload
                })
            }
        )
    }

    getAddress(user) {
        let address = Object.values(user.address).filter(el => typeof el === "string");
        return address.join(" ")
    }

    render(){
        return (<div className="user-display">

            <span className="user-name">
                <h2 className="title">Name</h2>
                <ul className="tbl-column">
                    {
                        this.state.users.map(el => (
                        <div>
                            {el.name}
                        </div>
                        ))
                    }
                </ul>
            </span>
            <span className="user-email">
                <h2 className="title">Email</h2>
                <ul className="tbl-column">
                    {
                        this.state.users.map(el => (
                            <div>
                                {el.email}
                            </div>
                        ))
                    }
                </ul>
            </span>
            <span className="user-address">
                <h2 className="title">Address</h2>
                <ul className="tbl-column">
                    {
                        this.state.users.map(el => (
                            <div>
                                {this.getAddress(el)}
                            </div>
                        ))
                    }
                </ul>
            </span>
            <span className="user-phone">
                <h2 className="title">Phone</h2>
                <ul className="tbl-column">
                    {
                        this.state.users.map(el => (
                            <div>
                                {el.phone}
                            </div>
                        ))
                    }
                </ul>
            </span>
            <span className="user-company">
                <h2 className="title">Company</h2>
                <ul className="tbl-column">
                    {
                        this.state.users.map(el => (
                            <div>
                                {el.company.name}
                            </div>
                        ))
                    }
                </ul>
            </span>
        </div>)
    }
}
