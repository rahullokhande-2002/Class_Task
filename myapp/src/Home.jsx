import React, { useState } from 'react'


const initialStudents = [
  {id:1,name:"Amit",course:"React",age:22 },
  {id:2,name:"Sumit",course:"Node",age:23 },
  {id:3,name:"Sanket",course:"React",age:21 },
  {id:4,name:"Pratik",course:"JavaScript",age:22 }
];


const Home = () => {
   const [data,setData]=useState(initialStudents)
  return (
    <>
      {initialStudents.map((val) => {
        return <h1 key={val.id}>{val.name}</h1>;
      })}
    </>
  );
};


export default Home