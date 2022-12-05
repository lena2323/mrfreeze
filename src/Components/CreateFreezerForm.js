import React from 'react'

export default function CreateFreezerForm(props) {

    let{handleCreate,
        setNameOfZeFreezer,
        setDescription,
        setVolume,
        setDate} = props.createState;

        
  return (
    <div className="FreezersList">
      <h1> CREATE A FREEZER</h1>

      <form className="form-container" method='POST' onSubmit={handleCreate} >
      <label>Input ze name of ze freezer pls</label>
      <input type="text" required onChange={e => setNameOfZeFreezer(e.target.value)}></input>

      <label>Input ze description of ze freezer</label>
      <input type="text" required onChange={e => setDescription(e.target.value)}></input>

      <label>Input ze volume of ze freezer in kilos</label>
      <input type="number" required min={1} onChange={e => setVolume(e.target.value)} ></input>

      <label>Input ze time and date you're making ze freezer</label>
      <input type="date" required onChange={e => setDate(e.target.value)}></input>
      
      <button >Create ze freezer</button>
      </form>
    </div>
  )
}

