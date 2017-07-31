import React from 'react';
import ReactDOM from 'react-dom';
import FillingProfile from './profile/FillingProfile';
import LogIn from './login/LogIn';
import SignUp from './signup/SignUp';
import User from './user/User';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route, IndexRoute} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
injectTapEventPlugin();
ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component = {LogIn}/>
      <Route exact path="/user" component = {User}/>
      <Route exact path="/log/1" component = {SignUp} />
      <Route exact path="/log/2" component = {FillingProfile}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
