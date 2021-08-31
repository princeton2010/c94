// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAXeuI3NXaBBCMqP02Yk_9F8j-H78o2X6U",
      authDomain: "kwitter-22b5b.firebaseapp.com",
      projectId: "kwitter-22b5b",
      storageBucket: "kwitter-22b5b.appspot.com",
      messagingSenderId: "519070221208",
      appId: "1:519070221208:web:454daaf6d431d7e000e1ed"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
