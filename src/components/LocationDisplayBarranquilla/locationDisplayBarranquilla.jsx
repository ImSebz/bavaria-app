import React, { useContext } from 'react'
import './locationDisplayBarranquilla.css'
import { StoreContext } from '../../context/StoreContext';
import LocationItemBarranquilla from '../LocationItemBarranquilla/locationItemBarranquilla';


const locationDisplayBarranquilla = ({ category }) => {

    const { location_list_barranquilla } = useContext(StoreContext);

    return (
        <div className='location-display' id='location-display'>
            <h2> Nuestros lugares en Barranquilla </h2>
            <div className='location-display-list'>
                {location_list_barranquilla.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <LocationItemBarranquilla key={index} id={item._id} name={item.name} subtitle={item.subtitle} description={item.description} image={item.image} image_carousel={item.image_carousel} url_reserva={item.url_reserva} promo={item.promo} carta={item.carta} marca={item.marca} marca_logo={item.marca_logo} marker={item.marker} dress_code={item.dress_code} schedule={item.schedule} />
                    }
                })}
            </div>
        </div>
    )
}

export default locationDisplayBarranquilla;