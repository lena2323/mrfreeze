import React, { useState } from "react";
import CreateFreezerForm from "../CreateFreezerForm";

export default function FreezersList(){
  
  const [nameOfZeFreezer, setNameOfZeFreezer] = useState('')
  const [description, setDescription] = useState("")
  const [volume, setVolume] = useState("")
  const [date, setDate] = useState("")


  const handleCreate = (event) =>{
    event.preventDefoult();

    const newFreezer = {
      nameOfZeFreezer,
      description,
      volume,
      date
    }

    console.log(newFreezer);

  }


  let freezerData = {
    handleCreate,
    setNameOfZeFreezer,
    setDescription,
    setVolume,
    setDate
  }

  return (
    < CreateFreezerForm   createState={freezerData} />
  )
}

