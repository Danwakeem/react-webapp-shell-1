import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import HelloWorld from '@components/HelloWorld';

const Routes = () => (
    <Router>
      <Switch>
        <Route exact path="/">
          <HelloWorld />
        </Route>
      </Switch>
    </Router>
);

export default Routes;
