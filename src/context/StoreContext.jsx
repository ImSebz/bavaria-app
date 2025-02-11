import { createContext } from "react";
import { location_list } from "../assets/assets";
import { location_list_cali } from "../assetsCali/assetsCali";
import { location_list_barranquilla } from "../assetsBarranquilla/assetsBarranquilla";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const contextValue = {
        location_list,
        location_list_cali,
        location_list_barranquilla
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;