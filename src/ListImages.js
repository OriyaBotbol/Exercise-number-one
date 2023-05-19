import { useEffect, useState, useTransition } from "react";
import './listImages.css'

const ListImages=()=>{
    const [isPending, startTransition] = useTransition();
    const [urlList, setUrlList]=useState([]);
    const [flag, setFlag]=useState(false);
    let l=[]

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
         .then(res=> res.json())
         .then((jsonData)=>{
            startTransition(()=>{
                setUrlList(jsonData)
            })   
        })
        },[]);
    return(
        <>
        {flag==false?
        <input type="button" value="Click Me" id="button" onClick={()=>setFlag(true)}></input>
        :urlList.map(item=> (<img key={item.id} src={item.thumbnailUrl} alt="" className="img"/>))}  
        </>        
    )
}
export default ListImages;