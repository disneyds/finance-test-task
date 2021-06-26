import { LinearProgress } from '@material-ui/core';
import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import paths from './paths'

const HomePage = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "HomePage" */),
);
const ExchangeMonitoring = lazy(() =>
  import('../views/ExchangeMonitoring.js' /* webpackChunkName: "exchangeMonitoring" */),
);

export default function Routes() {
  return (
      <Suspense fallback={<LinearProgress />}>
        <Switch>
        
          <Route path={paths.HOME} exact component={HomePage} />

          <Route path={paths.EM} exact component={ExchangeMonitoring} />
        
          <Redirect to={paths.HOME} />
        
        </Switch>
      </Suspense>
    )
}
