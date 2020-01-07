import React, { FC, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import Tracker from './pages/Tracker';
const Order = React.lazy(() => import('./pages/Order'));

const App: FC = () => {
  return (
    <Router>
      <Suspense fallback={<h1>LOADING</h1>}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/order" component={Order} />
          <Route path="/tracker" component={Tracker} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
