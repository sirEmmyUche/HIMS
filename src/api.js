export async function loginUser(credentials){
    try{
        const url = "http://localhost:3000/login";
        const res =await fetch(url,
            {
                method:"post", 
                headers:{"content-type":"application/json"},
                body: JSON.stringify(credentials)
            })
        const data =await res.json();
        if(!res.ok || res.status===404){
            throw {
                message:data.message,
                status: res.status
            }
        }
        return data
    }catch(err){
        console.log(err)
    }
}

export async function signUpUser(credentials){
    try{
        const url = "http://localhost:3000/signup";
        const res =await fetch(url,
            {
                method:"post", 
                headers:{"content-type":"application/json"},
                body: JSON.stringify(credentials)
            })
        const data =await res.json();
        if(!res.ok || res.status===404){
            throw {
                message:data.message,
                status: res.status
            }
        }
        return data
    }catch(err){
        console.log(err)
    }
}


export async function verifyHouse(credentials){
    try{
        const url = "http://localhost:3000/verifyHouse";
        const res =await fetch(url,
            {
                method:"post", 
                headers:{"content-type":"application/json"},
                body: JSON.stringify(credentials)
            })
        const data =await res.json();
        if(!res.ok || res.status===404){
            throw {
                message:data.message,
                status: res.status
            }
        }
        return data
    }catch(err){
        // console.log(err)
        return err
    }
}


export async function registerHouse(credentials){
    try{
        const url = "http://localhost:3000/api/uploadFile";
        const res = await fetch(url,
            {
                method:"post", 
                // headers:{"content-type": "multipart/form-data"},
                // body: JSON.stringify(credentials)
                body: credentials
            })
        const data = await res.json();
        if(!res.ok || res.status===404){
            throw {
                message:data.message,
                status: res.status
            }
        }
        return data
    }catch(err){
        console.log(err)
    }
}
