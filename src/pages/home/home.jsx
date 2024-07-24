import React, { useState } from 'react';
import './home.css';
import Items from '../../components/Items/items';
import LocationDiplay from '../../components/LocationDisplay/locationDisplay';

const home = () => {

    const [category, setCategory] = useState("All");

    return (
        <div className=''>
            <Items category={category} setCategory={setCategory} />
            <LocationDiplay category={category} />
        </div>
    )
}

export default home