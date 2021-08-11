const fs=require("fs")
const path=require("path")
const http=require("http")








const app=http.createServer((req,res)=>{

    res.writeHead(200,{
        "Content-Type":"text/html"
    })

    let filePath=path.join(__dirname,req.url==="/"?"index.html":req.url)

    let ext=path.extname(filePath)
    if(!ext){
        felePath+=".html"
    }

    let contenttype="text/html"

    switch(ext){
     case ".css":
         contenttype="text/css"
         break
     case ".js":
         contenttype="text/js"
         break 



    }
     
    fs.readFile(filePath,(err,content)=>{
        if (err){
            throw err
        }

        res.end(content)
    })





})

app.listen(3000,()=>{
    console.log("server started");
})