
 let firebaseConfig = {
   apiKey: "AIzaSyB8rKdHaSlwbF-_sfOllZfCC_R357wEwl0",
   authDomain: "blog-buddy-32ff3.firebaseapp.com",
   projectId: "blog-buddy-32ff3",
   storageBucket: "blog-buddy-32ff3.appspot.com",
   messagingSenderId: "761285712256",
   appId: "1:761285712256:web:a7f94df53f5a3a9fb68965",
   measurementId: "G-ZGN2G009MC"
 };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();