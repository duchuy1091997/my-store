var firebaseConfig = {
    apiKey: "AIzaSyAEbvZ_kYkS-ql_dcEjNjh9LKUVvXBt0HE",
    authDomain: "my-store-12498.firebaseapp.com",
    databaseURL: "https://my-store-12498.firebaseio.com",
    projectId: "my-store-12498",
    storageBucket: "my-store-12498.appspot.com",
    messagingSenderId: "298010348954",
    appId: "1:298010348954:web:3ed3786ccdcf015a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

export default {
    db
}