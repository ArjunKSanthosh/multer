async function getUsers() {
    const res=await fetch ("http://localhost:3000/api/getusers")
    console.log(res);
    const users=await res.json();
    str=``
    users.map((user)=>{
        console.log(user);
        
        str+=`
                <div class="card">
                    <div class="img">
                        <img src="http://localhost:3000/api/image/${user.image.filename}" alt="">
                    </div>
                    <h3>${user.username}</h3>
                    <p>${user.email}</p>
                </div>
        `
    })
    document.getElementById("cards").innerHTML=str;
    
}
getUsers();