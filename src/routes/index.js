import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import DashboardConsultant from '../pages/DashboardConsultant';
import DashboardManager from '../pages/DashboardManager';
import DashboardDirector from '../pages/DashboardDirector';
import DetailGraph from '../pages/DetailGraph';
import Main from '../pages/Main';
import Utilization from '../pages/Utilization';
import Sugestion from '../pages/Sugestion';
import Profile from '../pages/Profile';
import RankingConsultant from '../pages/RankingConsultant';
import Ranking from '../pages/Ranking';
import Ticket from '../pages/Ticket';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/mdashboard" component={DashboardManager} isPrivate />
      <Route path="/cdashboard"  component={DashboardConsultant} isPrivate />
      <Route path="/ddashboard"  component={DashboardDirector} isPrivate />
      <Route path="/cranking" component={RankingConsultant} isPrivate />
      <Route path="/detail"  component={DetailGraph} isPrivate />

      {/* <Route path="/test" component={Test} isPrivate /> */}
      <Route path="/ranking" component={Ranking} isPrivate />
   

      <Route path="/utilization" component={Utilization} isPrivate />
      <Route path="/sugestion" component={Sugestion} isPrivate />
      <Route path="/ticket" component={Ticket} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      {/* <Route path="/" component={() => <h1>404</h1>} */}
    </Switch>
  );
}
