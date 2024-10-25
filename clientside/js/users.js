async function getUsers() {
    const res=await fetch ("http://localhost:3000/api/getusers")
    const users=await res.json();
    str=``
    users.map((user)=>{
        str+=`
                <div class="card">
                    <div class="img">
                        <img src="http://localhost:3000/api/image/${user.image.filename}" alt="">
                    </div>
                    <h3>${user.username}</h3>
                    <p>${user.email}</p>
                <div class="buts">
                    <button id="edit">Edit</button>
                    <button onclick="deleteUser('${user._id}')" id="delete">Delete</button>
                </div>
            </div>
               
        `
    })
    document.getElementById("cards").innerHTML=str;
    
}
async function deleteUser(id){
    console.log(id);
    
    const res=await fetch(`http://localhost:3000/api/delete/${id}`,
        {method:"DELETE"})
        console.log(res);
        
}
getUsers();