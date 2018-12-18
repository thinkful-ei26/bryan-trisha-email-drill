import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default function Email() {
    return (
        <Router>
            <div className="email">
                <Sidebar />
                <Switch>
                    {/* <Route exact path="/" render={() => (<Redirect to="/inbox"/>)}
                    /> */}
                     <Redirect from="/" to="/inbox"/>
                    <main>
                        <Route exact path="/:folderId" component={EmailList} />
                        <Route path="/:folderId/:emailId" component={SingleEmail} />
                        <EmailList folderId="inbox" /> 
                        {/* <SingleEmail folderId="inbox" emailId="1" /> */}
                    </main>
                </Switch>
            </div>
        </Router>
    );
}
