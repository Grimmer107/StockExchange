import React, { Component } from "react";
import SignupForm from '../../components/SignupForm/SignupForm';

class Signup extends Component {
    render() { 
        return (<div style={{backgroundColor: '#DAE5D0', width: '100%', height: '100%'}}>
            <SignupForm/>
        </div>);
    }
}
 
export default Signup;