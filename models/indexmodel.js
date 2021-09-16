var db=require('./connections')

function indexmodel()
{
    this.contactmodel=(cdetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection("cdetails").insertOne(cdetails,(err,result)=>{
                err? reject(err):resolve(result)
            })
        })        
    }

    this.loginmodel=(userdetails)=>{
        return new Promise((resolve,reject)=>{
            userdetails.status=1
            db.collection("register").find(userdetails).toArray((err,result)=>{
                err? reject(err):resolve(result)
            })                
        })
    }
    this.registermodel=(userdetails)=>{
        return new Promise((resolve,reject)=>{

            db.collection("register").find().toArray((err,result)=>{
                if(err)
                    console.log(err)
                else
                {
                    if(result.length==0)
                        _id=0
                    else
                        {
                            max_id=result[0]._id
                            for(let row of result)
                            {
                                if(row._id>max_id)
                                max_id=row._id                              
                            }
                                _id=max_id
                        }  
                        userdetails._id=_id+1
                        userdetails.role="user"
                        userdetails.status=0
                        userdetails.info= Date()

                            var userStatus=1
                            for(let row1 of result)
                            {
                                if(row1.username==userdetails.username)
                                    userStatus=0                              
                            }
                                if(userStatus==0)
                                    resolve(userStatus)
                                else
                                    {
                                        db.collection("register").insertOne(userdetails,(err,result)=>{
                                            err? reject(err):resolve(1)
                                        })
                                    }                            
                }
            })            
        })
    }
}

module.exports=new indexmodel