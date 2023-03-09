// console.log("hello debasree")

//{
// "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }

//https://reqres.in/api/login
const login = () => {
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
    }).then((res)=>{
        var data=res.json()
        // console.log(data)
        return data;

    }).then((data)=>{
        console.log("login data",data)
    })
}
login()