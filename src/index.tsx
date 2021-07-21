import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Contact, Resume_Projects } from './components';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/' component={Home}>
          <Home title={'React Portfolio'}/>
        </Route>

        <Route path='/contact' component={Contact}/>

        <Route path='/resume_projects' component={Resume_Projects}/>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();