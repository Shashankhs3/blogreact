import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducer/rootreducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, reduxFirestore,getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import 'firebase/firestore'
import firebase from 'firebase/app'
import fbConfig from './config/fbconfig'
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:'users'})
  )
);


  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
//for version 3
    // const rrfProps={
//     firebase,
//  config:fbConfig,
//     dispatch:store.dispatch,
//     createFirestoreInstance <ReactReduxFirebaseProvider{...rrfProps}>
// };


    



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

