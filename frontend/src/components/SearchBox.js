import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/name/${name}`);
  };
  return (
    // <form className="search" onSubmit={submitHandler}>
    //   <div className="row">
    //     <input
    //       type="text"
    //       name="q"
    //       id="q"
    //       onChange={(e) => setName(e.target.value)}
    //     ></input>
    //     <button className="primary" type="submit">
    //       <i className="fa fa-search"></i>
    //     </button>
    //   </div>
    // </form>
    <div className="container">
    <div className="input-group">
        <span className="input-group-addon"><i className="fa fa-search" onSubmit={submitHandler}></i></span>
        <input type="text" className="form-control" placeholder="Search" name="q" id="q" onChange={(e) => setName(e.target.value)}/>
        <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
    </div>
</div>
  
  );
}








