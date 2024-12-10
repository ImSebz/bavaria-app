import React from 'react';
import './itemsCali.css';
import { sites_list_cali } from '../../assetsCali/assetsCali';

const itemsCali = ({ category, setCategory }) => {
    return (
        <div className='items-menu' id='items-menu'>
            <h1>Tipos de establecimiento</h1>
            <div className='explore-items-menu'>
                {sites_list_cali.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev=>prev === item.site_name ? "All" : item.site_name)} key={index} className='explore-items-list'>
                            <img src={item.site_image} alt="Item image" />
                            <p>{item.site_name}</p>
                        </div>
                    )
                }
                )}
            </div>
            <hr />
        </div>
    )
}

export default itemsCali