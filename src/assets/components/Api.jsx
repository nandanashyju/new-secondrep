import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Api() {
    let [fdata,setfdata]=useState("")
    let fetchApi=async()=>{
        // let {data}=await axios.get("http://dummyjson.com/products")
        // console.log(data)
        let data=await fetch("http://dummyjson.com/products")
        let finaldata=await data.json()
        setfdata(finaldata)
        
      
    }
  useEffect(()=>{
    fetchApi()
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Api
