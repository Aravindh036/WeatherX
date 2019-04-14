
activate=()=>{
    console.log("jjj");
    document.getElementById("about-id").classList.toggle("active");
}

var home = `
    <div class="user-location">
        <div class="heading">Location</div>
        <input type="text" class="location-id" placeholder="Enter location">
    </div>
`;

var contact = `
    <div>
        Hello! contact me!!
    </div>
`;

var gallery = `
    <div>
        photos
    </div>
`

openGallery=()=>{
    document.getElementById("container-id").innerHTML= gallery;
}
openHome=()=>{
    document.getElementById("container-id").innerHTML= home;
}
openContact=()=>{
    document.getElementById("container-id").innerHTML= contact;
}
