import React from 'react'
import Sidebar from './sidebar'
import SingleEmail from './single-email'
import EmailList from './email-list'
import './email.css'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

export default function Email() {
  return (
    <Router>
      <div className='email'>
        <Sidebar />
        <main>
          <Switch>
            {/* <Route exact path="/" render={() => (<Redirect to="/inbox"/>)}
                    /> */}
            {/* <Redirect from='/' to='/inbox' /> */}
            <Route exact path='/:folderId' component={EmailList} />
            <Route path='/:folderId/:emailId' component={SingleEmail} />
            {/* <EmailList folderId='inbox' /> */}
            {/* <SingleEmail folderId="inbox" emailId="1" /> */}
          </Switch>
        </main>
      </div>
    </Router>
  )
}
