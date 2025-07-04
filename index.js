//creating an http server
//using express
//node default library >> noo!!

// const express=require('express')

// const app=express()

// function sum(n){
//     let ans=0
//     for(let i=1;i<=n;i++){
//         ans+=i
//     }
//     return ans
// }

// app.get("/",function(req,res){

//     const n=req.query.n
//     const ans=sum(n)
//     res.send("hi ur ans is "+ans)
// })

// app.listen(4001)


const express=require('express')

const app=express();

var users=[{
    name:"venkat",
    kidneys:[{
        healthy:false

    }]

    
}]// query parameters
app.get("/",function(req,res){
    const venkatkidneys=users[0].kidneys
    const numberofkidneys=venkatkidneys.length
    let noofhealthykidneys=0;
    for(let i=0;i<venkatkidneys.length;i++){
        if(venkatkidneys[i].healthy){
            noofhealthykidneys=noofhealthykidneys+1
        }
    }
    const noofunhealthykidneys = numberofkidneys-noofhealthykidneys
    res.json({
        numberofkidneys,
        noofhealthykidneys,
        noofunhealthykidneys
    })
    
})
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"DOne!!"
    })

})
app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
});
app.delete("/", function (req, res) {
    const newkidneys=[];  //removing all the unhelathy kidneys
    
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidneys
    res.json({msg:"done!"})
});




app.listen(4001)

