let ul = document.querySelector('.links-container');

auth.onAuthStateChanged((user) => {
    if (user) {
        // user logged in
        ul.innerHTML += `
        <li class="link-item">
        <a href="/admin" class="link">
        Dashboard</a></li>
        <li class="link-item">
        <a href="#" onClick="logoutUser()" class="link">LogOut</a></li>`
    } else {
        // userloggedout
        ul.innerHTML += `<li class="link-item"><a href="/admin" class="link">Login</a></li>`
    }
})