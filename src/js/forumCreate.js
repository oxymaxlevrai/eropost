const firebaseConfig = {
    apiKey: "AIzaSyAqmtPKLEsEzG-SZlldqNrXJp4xTiE2LnA",
    authDomain: "eronix01-2c077.firebaseapp.com",
    projectId: "eronix01-2c077",
    storageBucket: "eronix01-2c077.appspot.com",
    messagingSenderId: "930524623646",
    appId: "1:930524623646:web:ebd7a0ab82c62db26f8f0f"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        const fetchUsers = db.ref(`/users/${uid}`);
        fetchUsers.on('value', function (snapshot) {
            const users = snapshot.val();
            localStorage.setItem('username', users.username);
        })
    }
});

async function login() {
    location.reload()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)}