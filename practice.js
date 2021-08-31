const firebaseConfig = {
    apiKey: "AIzaSyAXeuI3NXaBBCMqP02Yk_9F8j-H78o2X6U",
    authDomain: "kwitter-22b5b.firebaseapp.com",
    databaseURL: "https://kwitter-22b5b-default-rtdb.firebaseio.com",
    projectId: "kwitter-22b5b",
    storageBucket: "kwitter-22b5b.appspot.com",
    messagingSenderId: "519070221208",
    appId: "1:519070221208:web:454daaf6d431d7e000e1ed"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
  });
}