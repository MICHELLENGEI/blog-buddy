// Initialize the FirebaseUI Widget using Firebase.
let ui = new firebaseui.auth.AuthUI(auth);

let login = document.querySelector('.login');

const blogSection = document.querySelector('.blog-section')

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
const getUserWrittenBlogs = () => {
    db.collection("bligs").where("author", "==", auth.currentUser.email.split('@')[0])
    .get()
    .then((blogs) => {
        blogs.forEach(blog => {
            createBlog(blog);
        });
    })
    .catch((error) => {
        console.log("Error getting blogs");
    })
}
const createBlog = (blog) =>{
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
        <a href="/${blog.id}/editor" class="btn grey">Edit</a>
        <a href="#" onClick="deleteBlog('${blog.id})" class="btn danger">Delete</a>
    </div>
    `;
}
const deleteBlog = (id => {
    db.collection("blogs").doc(id).delete().then(() => {
        location.reload();
    })
    .catch((error) => {
        console.log("Error deleting blog")
    })
})