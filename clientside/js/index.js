document.getElementById("frmyy").addEventListener("submit",(e)=>{
    e.preventDefault();
    const data=new FormData(e.target)
    fetch("http://localhost:3000/api/upload",{
        method:"POST",
        body:data
    })
    .then(async(res)=>{
        const result=await res.json();
        alert(result.msg)
        window.location.href="../pages/users.html"
        
    }).catch((error)=>{
        console.log(error);
        
    })

})