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
                    if (category === "All" || category === item.category) {
                        return <LocationItem key={index} id={item._id} name={item.name} subtitle={item.subtitle} description={item.description} image={item.image} image_carousel={item.image_carousel} url_reserva={item.url_reserva} promo={item.promo} carta={item.carta} marca={item.marca} marca_logo={item.marca_logo} marker={item.marker} dress_code={item.dress_code} schedule={item.schedule} />
                    }
                })}
            </div>
        </div>
    )
}

export default locationDisplay