import { useEffect, useState } from "react"

export const useAdmin = email =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setisAdminLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://doctors-portal-return-server-52wstn8jl-nahid-hasan3053.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setIsAdmin(data.isAdmin);
                setisAdminLoading(false)
            })
        }
    },[email])
    return [isAdmin, isAdminLoading]
}