import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5dPtnaZPb3DFLDq2slT_A7qJRDK8z5OA",
    authDomain: "kasumovicart-artbyiva.firebaseapp.com",
    projectId: "kasumovicart-artbyiva",
    storageBucket: "kasumovicart-artbyiva.appspot.com",
    messagingSenderId: "283322806429",
    appId: "1:283322806429:web:4fc0e0a3a73b21019d2474"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };