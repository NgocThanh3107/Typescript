import axios from "axios"
import { useEffect } from "react"

const FetchFolder = () => {
    let api = localStorage.getItem("api");
    let token = localStorage.getItem("token");
    useEffect(()=>{
        axios.get(`http://192.168.5.240/api/v1/folder?page=1&pageSize=10`,
            {
                headers: {
                    "API-Key" : api,
                    "Authorization": `Bearer ${token}`
                }
            }
        )
        .then(res =>{
            console.log(res)
        })
    })
    return(
        <div>

        </div>
    )
}
export default FetchFolder;