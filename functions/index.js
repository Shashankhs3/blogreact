const functions = require('firebase-functions');
const admin=require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Bloggers");
});


const createNotification=(notification=>{
    return admin.firestore().collection('notifications').add(notification).then(doc =>console.log('Notification Added',doc))
})

exports.projectCreated = functions.firestore
  .document('blogs/{blogId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added a new Blog',
      user: `${project.authorFirstname} ${project.authorLastname}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

})

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the Community',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
})


