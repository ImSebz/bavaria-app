import { createContext } from "react";
import { location_list } from "../assets/assets";
import { location_list_cali } from "../assetsCali/assetsCali";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const contextValue = {
        location_list,
        location_list_cali
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;