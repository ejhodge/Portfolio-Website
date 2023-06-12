import * as React from "react";
import UserInterface from '../UserInterface'
import "./UserComponent.css"

export default class UserComponent extends React.Component<UserInterface, {}> {
    constructor (props: UserInterface){
        super(props);
    }

    phoneNumberToString(phoneNumber: number) {
        var stringValue = phoneNumber.toString()
        console.log(stringValue)
        return '(' + stringValue.substring(0, 3) + ')' + ' ' + stringValue.substring(3, 6) + - + stringValue.substring(6)
    }
    
    render() {
        return (  
            <div className="personalDetails">
                <h2 className="pD">Personal Details</h2>
                <div className="about">
                    Birthdate <b>{this.props.birthdate.toDateString()}</b>
                    <br/>
                    Phone <b>{this.phoneNumberToString(this.props.phone)}</b>
                    <br/>
                    Email <b>{this.props.email}</b>
                    <br/>
                    Website <b>{this.props.website}</b>
                    <br/>
                    Address <b>{this.props.address}</b>
                    <br/>
                </div>
            </div>
        );
    }
}