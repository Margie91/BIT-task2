import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Reports from './Reports';

class MainPage extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect exact from='/' to='/reports' />
                <Route exact path='/reports' component={Reports} />
            </Switch>
        )
    }
}

export default MainPage;