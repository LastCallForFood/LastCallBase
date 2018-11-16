import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { GetSubscriberData } from './components/GetSubscriberData';
import { GetSupplierData } from './components/GetSupplierData';
import { RegisterSubscriber } from './components/RegisterSubscriber';
import { BaseService } from './components/BaseService';
import { PostService } from './components/PostSample';
import { FetchSubscriberAndPreferences } from './components/FetchSubscriberAndPreferences';
import { AboutUs } from './components/AboutUs';
import { Login } from './components/Login';
import { Splash } from './components/Splash';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/mealoffers' component={FetchData} />
            <Route path='/getsubscriberdata' component={GetSubscriberData} />
            <Route path='/getsupplierdata' component={GetSupplierData} />
            <Route path='/registersubscriber' component={RegisterSubscriber} />
            <Route path='/baseservice' component={BaseService} />
            <Route path='/postservice' component={PostService} />
            <Route path='/fetchsubscriberandpreferences' component={FetchSubscriberAndPreferences} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/login' component={Login} />
            <Route path='/splash' component={Splash} />
      </Layout>
    );
  }
}
