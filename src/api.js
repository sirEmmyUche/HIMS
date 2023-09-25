export async function loginUser(credentials){
    try{
        const url = "https://housing-84si.onrender.com/login"; 
        const res =await fetch(url,
            {
                method:"post", 
                headers:{"content-type":"application/json"},
                body: JSON.stringify(credentials)
            })
        const data =await res.json();
        if(!res.ok || res.status===404 || res.status===500){
            throw {
                message:data.message,
                status: res.status
            }
        }
        return data
    }catch(err){
        return err
    }
}

export async function signUpUser(credentials){
    try{
        const url = "https://housing-84si.onrender.com/signup";
        const res =await fetch(url,
            {
                method:"post", 
                headers:{"content-type":"application/json"},
                body: JSON.stringify(credentials)
            })
        const data =await res.json();
        if(!res.ok || res.status===404 || res.status===500){
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
        const url = "https://housing-84si.onrender.com/verifyHouse";
        const res =await fetch(url,
            {
                method:"post", 
                headers:{"content-type":"application/json"},
                body: JSON.stringify(credentials)
            })
        const data =await res.json();
        if(!res.ok || res.status===404 || res.status===500){
            throw {
                message:data.message,
                status: res.status
            }
        }
        return data
    }catch(err){
        return err
    }
}


export async function registerHouse(credentials){
    try{
        const url = "https://housing-84si.onrender.com/api/uploadFile";
        const res = await fetch(url,
            {
                method:"post", 
                body: credentials
            })
        const data = await res.json();
        if(!res.ok || res.status===404 || res.status===500){
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
