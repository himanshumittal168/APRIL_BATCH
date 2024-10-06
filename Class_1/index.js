// // console.log("HELLO");

// // // require("./file.js");/
// // // let {sum,diff}=require("./file.js");

// // import { sum } from "./file.js"
// // import {diff} from "./file.js"
// // // console.log(x);
// // console.log(typeof(richa));

// // sum(2,10);
// // diff(10,2);



// const express=require('express');
// const app=express();


// app.listen(4000,()=>{
//     console.log("SERVER IS ON");
// })

// app.get("/",(req,resp)=>{
//     console.log("HELLO");
//     resp.send("<h1>HELLO INDIA</h1>");
// })

// app.get("/intern/about",(req,resp)=>{
//     console.log("BYE");
//     resp.send("<h1>ABOUT PAGE");
// })

// app.use(express.json());


// let data=[]
// app.post("/send",(req,resp)=>
// {
//     let {name,email}=req.body;
//     console.log(name);
//     console.log(email);
//     let obj={
//         naam:name,
//         address:email,
//     }
//     data.push(obj);
//     resp.send(data);
// })



let express=require('express');
const app=express();
app.use(express.json())
app.listen(4000,()=>{
    console.log("SERVER IS ON");
})

let data=[
    {
        id:1,
        name:'Richa',
        phone:100,
    },
    {
        id:2,
        name:'Himanshu',
        phone:101,
    },
    {
        id:3,
        name:'Riya',
        phone:103,
    },
]

app.get("/",(req,resp)=>{
    resp.send(data);
})

app.post("/add",(req,resp)=>
{
    let {id,name,phone}=req.body;
    let obj=
    {
        id:id,
        name:name,
        phone:phone,
    }
    data.push(obj);
    resp.send(data);
})

app.put("/change/:arun",(req,resp)=>
{
    const id=req.params.arun;
    const user=data.find((user)=> user.id==id);
    console.log(user);
    // resp.send("DONE");
    if(!user)
        return resp.send("NO USER FOUND");
    const keys=Object.keys(req.body);
    keys.forEach((key)=>{
        user[key]=req.body[key];
    })
    resp.send(data);
})

app.delete("/remove/:id",(req,resp)=>
{
    const id=req.params.id;
    const obj=data.find((user)=> user.id==id);
    if(!obj)
         return resp.send("NO USER FOUND");
     data=data.filter((user)=>user.id!=obj.id);
    resp.send(data);
})