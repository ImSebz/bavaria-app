
import logoHighEnd from './logo_high_end.svg'

import facebook_icon from './facebook_icon.svg'
import x_icon from './x_icon.svg'
import instagram_icon   from './instagram_icon.svg'

import restaurante from './restaurante.png'
import rooftop from './rooftop.png'
import bar from './bar.jpg'
import marinas from './marinas.png'

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
import promoActivas from './promo_activas.svg'

import corona from './corona.svg'
import corona_logo from './corona_logo.svg'
import clubColombia from './club_colombia.svg'
import clubColombia_logo from './club_colombia_logo.svg'
import stella from './stella.svg'
import stella_logo from './stella_logo.svg'

export const assets = {
    logoHighEnd,
    facebook_icon,
    x_icon,
    instagram_icon,
    restaurante,
    rooftop,
    bar,
    marinas,
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
    promoActivas,
    corona,
    corona_logo,
    clubColombia,
    clubColombia_logo,
    stella,
    stella_logo
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
]

export const location_list = [
    {
        _id: "1",
        name: "Don Juan",
        image: don_juan,
        description: "El sitio ideal para compartir con amigos y familia.",
        category: "Restaurante",
        url_reserva: "https://donjuan.precompro.com/select/",
        carta: "https://qr.precompro.com/?source=donjuan.precompro.com",
        marca: stella,
        marca_logo: stella_logo
    },
    {
        _id: "2",
        name: "The Clock Pub",
        image: clock_pub,
        description: "Tomate el tiempo para pasarla bien",
        category: "Bar",
        url_reserva: "https://api.whatsapp.com/send/?phone=573054446051&text&type=phone_number&app_absent=0",
        carta: "https://drive.google.com/file/d/1XfNuhZ4ruCEvGBONUJ8PdQ4Fr1lAizCu/view",
        marca: clubColombia,
        marca_logo: clubColombia_logo
    },
    {
        _id: "3",
        name: "Inkanto",
        image: inkanto,
        description: "Cocina Ancestral Peruana",
        category: "Restaurante",
        url_reserva: "https://api.whatsapp.com/send?phone=573184987259&text=Hola!%20quiero%20contactar%20a%20Inkanto%20Cartagena",
        carta: "https://issuu.com/graninkacartagena/docs/menu_gran_inka_espan_ol_julio_22_compressed/1?ff",
        marca: clubColombia,
        marca_logo: clubColombia_logo
    },
    {
        _id: "4",
        name: "Casa Cruxada",
        image: casa_cruxada,
        description: "Descubre una experiencia culinaria inolvidable",
        category: "Restaurante",
        url_reserva: "https://restaurante.covermanager.com/reservas-casa-cruxada/",
        carta: "https://casacruxada.com/wp-content/uploads/2023/11/Carta_CC_QR-w-J.pdf",
        marca: stella,
        marca_logo: stella_logo
    },
    {
        _id: "5",
        name: "Mistura",
        image: mistura,
        description: "Un lugar especial que se queda entre los mejores recuerdos",
        category: "Restaurante",
        url_reserva: "https://mistura-1.cluvi.co/mistura-cartagena-2/reservar",
        carta: "https://mistura-1.cluvi.co/mistura-cartagena-2/menu-digital/home",
        marca: stella,
        marca_logo: stella_logo
    },
    {
        _id: "6",
        name: "Uma",
        image: uma,
        description: "",
        category: "Restaurante",
        url_reserva: "https://www.covermanager.com/reservation/module_restaurant/uma-cartagena/spanish?source=Instagram",
        carta: "https://www.umacantinaperuanactg.com/bebemos/",
        marca: stella,
        marca_logo: stella_logo
    },
    {
        _id: "7",
        name: "La Unica",
        image: la_unica,
        description: "Donde la buena música y gastronomía se encuentran",
        category: "Restaurante",
        url_reserva: "https://launica.precompro.com/select?source=instagram&fbclid=PAZXh0bgNhZW0CMTEAAaYtXepo07zGPSAaT4TO57gTP73osrqBya55YiJIPPp4aPVqBg2wHkQIR5M_aem_Moa84kU1m4F4I5_bdnMzSw",
        carta: "https://la-unica.cluvi.co/la-unica/menu-digital/home?fbclid=PAZXh0bgNhZW0CMTEAAaY2dD9_oE4jzQ5sPOXLHkY3Kv-kKbfviaeqkPsN4mxcqwF_igwsi0HBa6c_aem_3Jlz8_BX7frT-1igF7elBQ",
        marca: stella,
        marca_logo: stella_logo
    },
    {
        _id: "8",
        name: "Hotel Movich",
        image: hotel_movich,
        description: "Entendemos las necesidades de su visita y creamos servicios a la medida",
        category: "Rooftop",
        url_reserva: "",
        carta: "",
        marca: corona,
        marca_logo: corona_logo
    },
    {
        _id: "9",
        name: "Sophia Rooftop",
        image: sophia_rooftop,
        description: "Un espacio que enamora. Una atractiva terraza con piscina, tumbonas, sillones y servicio de bar con una impresionante vista panorámica de la ciudad",
        category: "Rooftop",
        url_reserva: "",
        carta: "",
        marca: corona,
        marca_logo: corona_logo
    },
    {
        _id: "10",
        name: "Marina Todomar",
        image: marina_todomar,
        description: "",
        category: "Marinas",
        url_reserva: "",
        carta: "",
        marca: corona,
        marca_logo: corona_logo
    }
]
