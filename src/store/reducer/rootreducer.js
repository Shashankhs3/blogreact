import authreducer from './authreducer'
import blogreducer from './blogreducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootreducer=combineReducers({
    auth:authreducer,
    blog:blogreducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootreducer