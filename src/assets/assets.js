import basket_icon from './basket_icon.png'
import logoBaravia from './bavaria_logo.svg'
import header_img from './header_img.png'
import search_icon from './search_icon.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import facebook_icon from './facebook_icon.svg'
import x_icon from './x_icon.svg'
import instagram_icon   from './instagram_icon.svg'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

import restaurante from './restaurante.png'
import rooftop from './rooftop.png'
import bar from './bar.jpg'
import marinas from './marinas.png'
import hotel from './hotel.png'

import don_juan from './don_juan.jpg'
import clock_pub from './clock_pub.jpg'
import inkanto from './inkanto.jpg'
import casa_cruxada from './casa_cruxada.png'
import mistura from './mistura.jpg'
import uma from './uma.jpg'
import la_unica from './la_unica.jpg'
import hotel_movich from './hotel_movich.jpg'
import sophia_rooftop from './sophia_rooftop.jpg'
import marina_todomar from './marina_todomar.jpg'

import reservaIcon from './reserva.svg'
import cartaIcon from './carta.svg'
import mapaIcon from './mapa.svg'

export const assets = {
    logoBaravia,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    facebook_icon,
    x_icon,
    instagram_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    restaurante,
    rooftop,
    bar,
    marinas,
    hotel,
    don_juan,
    clock_pub,
    inkanto,
    casa_cruxada,
    mistura,
    uma,
    la_unica,
    hotel_movich,
    sophia_rooftop,
    marina_todomar,
    reservaIcon,
    cartaIcon,
    mapaIcon,
}

export const sites_list = [
    {
        site_name: "Restaurante",
        site_image: restaurante
    },
    {
        site_name: "Rooftop",
        site_image: rooftop
    },

    {
        site_name: "Bar",
        site_image: bar
    },
    {
        site_name: "Marinas",
        site_image: marinas
    },
    {
        site_name: "Hotel",
        site_image: hotel
    }
]

export const location_list = [
    {
        _id: "1",
        name: "Don Juan",
        image: don_juan,
        description: "El sitio ideal para compartir con amigos y familia.",
        category: "Restaurante",
        url_reserva: "https://donjuan.precompro.com/select/",
        carta: "https://qr.precompro.com/?source=donjuan.precompro.com"
    },
    {
        _id: "2",
        name: "The Clock Pub",
        image: clock_pub,
        description: "",
        category: "Bar",
        url_reserva: "https://api.whatsapp.com/send/?phone=573054446051&text&type=phone_number&app_absent=0",
        carta: "https://drive.google.com/file/d/1XfNuhZ4ruCEvGBONUJ8PdQ4Fr1lAizCu/view"
    },
    {
        _id: "3",
        name: "Inkanto",
        image: inkanto,
        description: "",
        category: "Restaurante",
        url_reserva: "https://api.whatsapp.com/send?phone=573184987259&text=Hola!%20quiero%20contactar%20a%20Inkanto%20Cartagena",
        carta: "https://issuu.com/graninkacartagena/docs/menu_gran_inka_espan_ol_julio_22_compressed/1?ff"
    },
    {
        _id: "4",
        name: "Casa Cruxada",
        image: casa_cruxada,
        description: "",
        category: "Restaurante",
        url_reserva: "https://restaurante.covermanager.com/reservas-casa-cruxada/",
        carta: "https://casacruxada.com/wp-content/uploads/2023/11/Carta_CC_QR-w-J.pdf"
    },
    {
        _id: "5",
        name: "Mistura",
        image: mistura,
        description: "",
        category: "Restaurante",
        url_reserva: "https://mistura-1.cluvi.co/mistura-cartagena-2/reservar",
        carta: "https://mistura-1.cluvi.co/mistura-cartagena-2/menu-digital/home"
    },
    {
        _id: "6",
        name: "Uma",
        image: uma,
        description: "",
        category: "Restaurante",
        url_reserva: "https://www.covermanager.com/reservation/module_restaurant/uma-cartagena/spanish?source=Instagram",
        carta: "https://www.umacantinaperuana.com/"
    },
    {
        _id: "7",
        name: "La Unica",
        image: la_unica,
        description: "",
        category: "Restaurante",
        url_reserva: "https://launica.precompro.com/select?source=instagram&fbclid=PAZXh0bgNhZW0CMTEAAaYtXepo07zGPSAaT4TO57gTP73osrqBya55YiJIPPp4aPVqBg2wHkQIR5M_aem_Moa84kU1m4F4I5_bdnMzSw",
        carta: "https://la-unica.cluvi.co/la-unica/menu-digital/home?fbclid=PAZXh0bgNhZW0CMTEAAaY2dD9_oE4jzQ5sPOXLHkY3Kv-kKbfviaeqkPsN4mxcqwF_igwsi0HBa6c_aem_3Jlz8_BX7frT-1igF7elBQ"
    },
    {
        _id: "8",
        name: "Hotel Movich",
        image: hotel_movich,
        description: "",
        category: "Hotel",
        url_reserva: "",
        carta: ""
    },
    {
        _id: "9",
        name: "Sophia Rooftop",
        image: sophia_rooftop,
        description: "",
        category: "Rooftop",
        url_reserva: "",
        carta: ""
    },
    {
        _id: "10",
        name: "Marina Todomar",
        image: marina_todomar,
        description: "",
        category: "Marinas",
        url_reserva: "",
        carta: ""
    }
]
