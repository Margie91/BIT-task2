import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReportsPage from './ReportsPage';

class MainPage extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect exact from='/' to='/reports' />
                <Route exact path='/reports' component={ReportsPage} />
            </Switch>
        )
    }
}

export default MainPage;