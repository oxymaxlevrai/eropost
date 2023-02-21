const username = localStorage.getItem('username');
const firebaseConfig = {
    apiKey: "AIzaSyBexyNPogru8Jc7sq4FoZBrFEckPrmBS8c",
    authDomain: "eronixmc.firebaseapp.com",
    databaseURL: "https://eronixmc-default-rtdb.firebaseio.com",
    projectId: "eronixmc",
    storageBucket: "eronixmc.appspot.com",
    messagingSenderId: "469680302705",
    appId: "1:469680302705:web:b2475a19ba090001e109d0",
    measurementId: "G-6Z685TD6MN"
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