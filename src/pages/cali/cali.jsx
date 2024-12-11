import React, { useState } from 'react';
import './cali.css';
import ItemsCali from '../../components/ItemsCali/itemsCali';
import LocationDiplayCali from '../../components/LocationDisplayCali/locationDisplayCali';

const cali = () => {

    const [category, setCategory] = useState("All");

    return (
        <div className=''>
            <ItemsCali category={category} setCategory={setCategory} />
            <LocationDiplayCali category={category} />
        </div>
    )
}

export default cali