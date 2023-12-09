import React, { Component } from 'react';
import DataPortal from './DataPortal/DataPortal';
import MarketSummary from './MarketSummary/MarketSummary';
import Main_Page from './MainPage/main_page';
import Classes from './App.css';
import { Switch, Route } from 'react-router-dom'
import NavSection from '../components/NavSection/NavSection';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Logout from './Logout//Logout';
import UserInfo from './UserInfo/UserInfo';
import FinanceNews from './FinancialAnnounc/FinanceNews';
import jwtDecode from 'jwt-decode';


class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem('token');
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }


  render() {
    return (
      <div className={Classes.body}>
        <NavSection user={this.state.user}/>
        <Switch>
          <Route path="/" exact component={Main_Page} />
          <Route path="/DataPortal" component={DataPortal} />
          <Route path="/MarketSummary" component={MarketSummary} />
          <Route path="/FinancialNews" component={FinanceNews} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Logout" component={Logout} />
          <Route path="/UserInfo" component={UserInfo} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
