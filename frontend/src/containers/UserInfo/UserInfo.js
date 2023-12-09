import React, { Component } from 'react';
import UserPreference from './UserPreference/UserPreference';
import Classes from './UserInfo.css';
import jwtDecode from 'jwt-decode';

class UserInfo extends Component {



    render() {
        let jwt = localStorage.getItem('token');
        let user = jwtDecode(jwt);
        return (
            <div>
                <div className={Classes.UserInfo}>
                    <h4>User Info</h4>
                    <div className={Classes.UserData}>
                        <pre>Name: {user.name}</pre>
                        <pre>Email: {user.email}</pre>
                    </div>
                </div>
                <div className={Classes.UserPreference}>
                    <h4>User Preference</h4>
                    <UserPreference />
                </div>
            </div>
        );
    }
}

export default UserInfo;