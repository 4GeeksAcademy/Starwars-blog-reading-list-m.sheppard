import React, {useState,useEffect,useContext} from "react";
import {Link}from "react-router-dom";

import{Context}from "../store/appContext";


export const CharacterCard = () =>{
    const{store,actions}=useContext(Context);
    const[characters,setCharacters]=useState([])};