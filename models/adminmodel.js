var db=require('./connections')

function adminmodel()
{
    this.fatchuser=()=>{
        return new Promise((resolve,reject)=>{
            db.collection("register").find({"role":"user"}).toArray((err,result)=>{
                err? reject(err):resolve(result)
            })
        })        
    }
    
}

module.exports=new adminmodel