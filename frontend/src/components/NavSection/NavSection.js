import React from 'react';
import Classes from './NavSection.css';
import {NavLink, useLocation, useHistory} from 'react-router-dom';
import SideMenu from '../../UI/SideMenu/SideMenu';


const navSection = ({ user }) => {
    const history = useHistory();

    let location = useLocation();

    // if (location.pathname === '/Login' || location.pathname === '/Signup') {
    //     document.getElementById('root').style.backgroundColor = 'red';
    // } else {
    //     document.getElementById('root').style.backgroundColor = '';
    // }

    function handle() {
        document.querySelector('ul li a').click();
    }

    function showMenu(){
        return (
            <SideMenu user={user}/>
        );
    }


    var homePageActive = location.pathname === '/' ? true : false;

    var homePageStyle = {
        borderBottom: '',
        fontWeight: ''
    }
    homePageStyle.borderBottom = homePageActive ? '4px solid #0088a9' : '';
    homePageStyle.fontWeight = homePageActive ? '700' : '';

    var title = document.querySelector('title');
    if(location.pathname === '/') {
        title.innerHTML = 'Stocks';
    } else if(location.pathname === '/DataPortal') {
        title.innerHTML = 'Data Portal';
    } else {
        title.innerHTML = 'Market Summary'
    }
    
    return (
        <header id = 'NavSection' className={Classes.body}>
            <p className = {Classes.logo_name} onClick = {handle}><i class="fas fa-chart-mixed"></i> Stocks</p>
            
            <nav>
                <ul className={Classes.nav__links}>
                    <li><NavLink className={Classes.link} to={{pathname: '/'} } style={homePageStyle}>Main Page</NavLink></li>
                    <li><NavLink className={Classes.link} activeClassName={Classes.active} to={{pathname: '/DataPortal'}}>Data Portal</NavLink></li>
                    <li><NavLink className={Classes.link} activeClassName={Classes.active} to={{pathname: '/MarketSummary'}}>Market Summary</NavLink></li>
                    <li><NavLink className={Classes.link} activeClassName={Classes.active} to={{pathname: '/FinancialNews'}}>Financial Announcements</NavLink></li>
                    <li style={{floatRight: '4rem'}}>
                        { user ? <div className={Classes.sideMenu}>
                            <SideMenu user={user}/>
                        </div> : null }
                    </li>
                </ul>
            </nav>
            <div>
            {!user && <div>
                <button className={Classes.btn} onClick = {() => history.push('/Login')}>Log In</button>
                <button className={Classes.btn + " " + Classes.signup}
                onClick = {() => history.push('/Signup')}>Sign Up</button>
            </div>}
            {/* {user && <div><button className={Classes.btn} onClick = {showMenu} style={{borderRadius: '50px', marginLeft: '28rem'}}><i className="fas fa-user"></i></button></div>} */}
            </div>
            
   
        </header>
            
       
    );
}

export default navSection