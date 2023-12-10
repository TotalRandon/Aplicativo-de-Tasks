import firebase from "firebase"
import "firebase/storage"
import { ReactNativeFirebase } from "@react-native-firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCzwqpBhOlpX8001JMIQijo_DjSTY5uTfw",
    authDomain: "task-fa684.firebaseapp.com",
    projectId: "task-fa684",
    storageBucket: "task-fa684.appspot.com",
    messagingSenderId: "977607491210",
    appId: "1:977607491210:web:14404e5b6c05822ddab773"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database 