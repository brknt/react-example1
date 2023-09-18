
import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [allData,setAllData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const getData = async()=>{
      const {data} = await axios.get('https://fakestoreapi.com/products/');
      setAllData(data);
      setLoading(false);
    }
    getData();
  },[]);



    return (
      loading ? <div>Loading.....</div> :
      <div>
        {
          allData?.map((data,i)=>(
            <div onClick={()=> navigate(`detail/${data?.id}`)} style={{marginBottom:"30px", cursor:"pointer"}} key={i}>
              <div>{data?.title}</div>
              <img style ={{width:"100px"}} src={data?.image} alt="" />
            </div>
          ))
        }

      </div>
    );
  }

  export default Home