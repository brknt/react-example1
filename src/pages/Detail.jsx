import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';




const Detail = ()=> {
    const {id} = useParams();
    const [singleData,setSingleData] = useState();



    useEffect(()=>{
      if(id){
        const getData = async()=>{
          const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setSingleData(data);
        }
        getData();
      }
    },[id]);

    return (
      <div>
        {
       
            <div  style={{marginBottom:"30px", cursor:"pointer"}}>
              <div>{singleData?.title}</div>
              <img style ={{width:"100px"}} src={singleData?.image} alt="" />
            </div>
        
        }

      </div>
    )
  }

  export default Detail