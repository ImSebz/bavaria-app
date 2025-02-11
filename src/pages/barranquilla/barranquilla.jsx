import React, { useState } from 'react';
import './barranquilla.css';
import ItemsBarranquilla from '../../components/ItemsBarranquilla/itemsBarranquilla';
import LocationDiplayBarranquilla from '../../components/LocationDisplayBarranquilla/locationDisplayBarranquilla';

const barranquilla = () => {

    const [category, setCategory] = useState("All");

    return (
        <div className=''>
            <ItemsBarranquilla category={category} setCategory={setCategory} />
            <LocationDiplayBarranquilla category={category} />
        </div>
    )
}

export default barranquilla