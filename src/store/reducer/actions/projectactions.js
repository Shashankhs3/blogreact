import { getFirestore } from "redux-firestore";

export const createProject = (project) => {
    return (dispatch, getState,{getFirebase,getFireStore}) => {
      // make async call to database
      const firestore= getFirestore();
      const profile=getState().firebase.profile;
      const authorID=getState().firebase.auth.uid;
      firestore.collection('blogs').add({
        ...project,
        authorFirstname:profile.firstName,
        authorLastname:profile.lastName,
        authorID:authorID,
        created:new Date()
      }).then(()=>{dispatch({ type: 'CREATE_PROJECT', project });}).catch((err)=>{
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      })
      
    }
  };

  