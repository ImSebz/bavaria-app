import React, { useState } from 'react';
import './cali.css';
import Items from '../../components/Items/items';
import LocationDiplay from '../../components/LocationDisplay/locationDisplay';

const cali = () => {

    const [category, setCategory] = useState("All");

    return (
        <div className=''>
            <Items category={category} setCategory={setCategory} />
            <LocationDiplay category={category} />
        </div>
    )
}

export default cali