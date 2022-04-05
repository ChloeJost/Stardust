// == Import npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// == Import
import Theme from 'src/components/Theme/theme';
import Main from 'src/components/Main';
import HomePage from 'src/containers/HomePage';
import Register from 'src/containers/Register';
import UserProfil from 'src/containers/UserProfil';
import SkyMap from 'src/components/SkyMap';
import Forum from 'src/containers/Forum';
import Termes from 'src/components/termes';
import InfoPage from 'src/components/InfoPage';
import TeamPage from 'src/components/TeamPage';
import Footer from 'src/components/Footer';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <Theme>
    <AppStyled>
      <Router>
        <Main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/register' component={Register} />
            <Route path='/skymap' component={SkyMap} />
            <Route path='/users' component={UserProfil} />
            <Route path='/forum' component={Forum} />
            <Route exact path='/termes' component={Termes} />
            <Route path='/infos' component={InfoPage} />
            <Route path='/contact' component={TeamPage} />
          </Switch>
          <Footer />
        </Main>
      </Router>
    </AppStyled>
  </Theme>
);
// == Export
export default App;
