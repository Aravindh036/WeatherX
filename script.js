  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDq9-Mfk-H55Slbs2lYLBZo7dUEWFomHGc",
    authDomain: "weatherx-bc158.firebaseapp.com",
    databaseURL: "https://weatherx-bc158.firebaseio.com",
    projectId: "weatherx-bc158",
    storageBucket: "weatherx-bc158.appspot.com",
    messagingSenderId: "632991437495"
  };
  firebase.initializeApp(config);
  console.log("hhhh",firebase);

  register=()=>{
    var username = document.getElementById("username").value;
    var password = document.getElementById("register-password").value;
    var confirm_password = document.getElementById("register-confirm").value;
    var mail = document.getElementById("register-email").value;
    console.log(username,password);
    users = [];
    var db = firebase.firestore();

    db.collection("users").get().then((data)=>{
      data.forEach((users)=>{
          console.log("hhhh");
      })
    })
    var count=0;
    for(var i in users){
      if((username === users[i].email) && (password === users[i].password)){
        count =1;
        console.log("authenticated");
      }
    }
    if(count===0){
      db.collection("users").add({
        email:mail,
        username:username,
        password:password
      })
      .then((data)=>{
        window.location.href = "index.html";
      })
      .catch((error)=>{
        console.log(error);
      })
      ;
    }
  }


  login=()=>{
    var username = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
    console.log(username,password);
    users = [];
    var db = firebase.firestore();
    db.collection("users").get().then((data)=>{
      data.forEach((user)=>{
        users.push(user.data());
        console.log(user.data());
      })
      for(var i in users){
      if((username === users[i].email) && (password === users[i].password)){
        console.log("authenticated");
        return;
      }
    }
    alert("The provided credentials are not correct");
    })
  }