import React, { useContext } from 'react'
import './locationDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import LocationItem from '../LocationItem/locationItem';


const locationDisplay = ({ category }) => {

    const { location_list } = useContext(StoreContext);

    return (
        <div className='location-display' id='location-display'>
            <h2> Nuestros lugares </h2>
            <div className='location-display-list'>
                {location_list.map((item, index) => {
                    if ( category ==="All" || category === item.category) {
                        return <LocationItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default locationDisplay