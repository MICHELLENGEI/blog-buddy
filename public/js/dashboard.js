// Initialize the FirebaseUI Widget using Firebase.
let ui = new firebaseui.auth.AuthUI(auth);

let login = document.querySelector('.login');

auth.onAuthStateChanged((user) => {
    console.log("Auth state changed:", user);
    if(user){
        login.style.display = "none";
    } else {
        setupLoginButton();
    }
})

const setupLoginButton = () => {
    console.log("Setting up login button...");
    ui.start("#loginUI", {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectURL) {
                console.log("Sign-in success:", authResult);
                login.style.display = "none";
                return false;
            }
        },
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    })
}
//fetch use written blog