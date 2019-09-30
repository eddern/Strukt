import * as firebase from "firebase";
import config from "./firebaseConfig";

// Initialize firebase app
firebase.initializeApp(config);

// This is the firebase object used by the application
export default firebase;
