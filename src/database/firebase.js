import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB8PXcLLlpzYpLxlSgRrOlRHi99LKBeKAI",
    authDomain: "react-native-app-c206f.firebaseapp.com",
    projectId: "react-native-app-c206f",
    storageBucket: "react-native-app-c206f.appspot.com",
    messagingSenderId: "1038700084213",
    appId: "1:1038700084213:web:b44a3fa52e3e94dffc3ebc"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default  {
  firebase,
  db
}
