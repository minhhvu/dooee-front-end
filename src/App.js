import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUpPage from './views/SignUpPage';
import LoginPage from './views/LoginPage';
import DashboardPage from './views/DashboardPage';
import CoursePage from './views/CoursePage';
import VideoPage from './views/VideoPage';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from "./themes/theme";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Switch>
                  <Route exact path={'/'} component={LoginPage}/>
                  <Route exact path={'/dashboard'} component={DashboardPage}/>
                  <Route exact path={'/login'} component={LoginPage}/>
                  <Route exact path={'/signup'} component={SignUpPage}/>
                  <Route exact path={'/videos/:id'} render={(props) => <VideoPage videoId={props.match.params.id}/>}/>
                  <Route exact path={'/courses/:id'} render={(props) => <CoursePage courseId={props.match.params.id}/>}/>
              </Switch>
          </Router>
      </ThemeProvider>
  );
}

export default App;
