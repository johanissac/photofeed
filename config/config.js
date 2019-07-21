
import firebase from 'firebase'



var config = {
    apiKey: "AIzaSyBfwKXEyBBjgVKRrF4T4HR1l8wSfsWcDDw",
    authDomain: "photofeed-9a5a1.firebaseapp.com",
    databaseURL: "https://photofeed-9a5a1.firebaseio.com",
    projectId: "photofeed-9a5a1",
    storageBucket: "photofeed-9a5a1.appspot.com",
    messagingSenderId: "321313051528"
  };
  firebase.initializeApp(config);

  export const f = firebase;
  export const auth = firebase.auth();
  export const database = firebase.database();
  export const storage = firebase.storage();
  
