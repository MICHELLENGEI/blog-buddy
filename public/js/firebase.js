 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyB8rKdHaSlwbF-_sfOllZfCC_R357wEwl0",
   authDomain: "blog-buddy-32ff3.firebaseapp.com",
   projectId: "blog-buddy-32ff3",
   storageBucket: "blog-buddy-32ff3.appspot.com",
   messagingSenderId: "761285712256",
   appId: "1:761285712256:web:a7f94df53f5a3a9fb68965",
   measurementId: "G-ZGN2G009MC"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 let db = firebase.firestore();