const firebaseConfig = {
      apiKey: "AIzaSyB81qvVB-xhwiAMKpgOclaCyp8vjV3Z_TE",
      authDomain: "kwitter-app-c59d4.firebaseapp.com",
      databaseURL: "https://kwitter-app-c59d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-c59d4",
      storageBucket: "kwitter-app-c59d4.appspot.com",
      messagingSenderId: "798459655897",
      appId: "1:798459655897:web:4aaffb380dcbab0e1070c8",
      measurementId: "G-KJD1G20NKZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room names"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}