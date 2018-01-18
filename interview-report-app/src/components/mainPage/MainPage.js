import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ReportsPage from './ReportsPage';
import SubmitReportPage from '../reports/SubmitReportPage';

class MainPage extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect exact from='/' to='/reports' />
                <Route exact path='/reports' component={ReportsPage} />
                <Route exact path='/submitreport' component={SubmitReportPage} />
            </Switch>
        )
    }
}

export default MainPage;