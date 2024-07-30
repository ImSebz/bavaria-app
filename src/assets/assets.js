
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
import urania_rooftop from './urania_rooftop.jpg'
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
    urania_rooftop,
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
        subtitle: "Cocina Caribe",
        description: "Frescos pescados y mariscos locales, carnes y la inigualable oferta de vegetales y frutas de nuestro país le hacen el trabajo mas fácil al chef que propone una carta casual logrando combinaciones sencillas, platos ideales para maridar con una Stella Artois.",
        category: "Restaurante",
        url_reserva: "https://donjuan.precompro.com/select/",
        promo: "https://www.perfectservestella.com/",
        carta: "https://qr.precompro.com/?source=donjuan.precompro.com",
        marca: stella,
        marca_logo: stella_logo
    },
    {
        _id: "2",
        name: "The Clock Pub",
        image: clock_pub,
        subtitle: "Beer Pub",
        description: "Pub ideal para disfrutar de una buena cerveza Club Colombia que nos representa como Colombianos, en compañía de platos de excelente calidad y un ambiente musical inigualable. ",
        category: "Bar",
        url_reserva: "https://api.whatsapp.com/send/?phone=573054446051&text&type=phone_number&app_absent=0",
        promo: "",
        carta: "https://drive.google.com/file/d/1XfNuhZ4ruCEvGBONUJ8PdQ4Fr1lAizCu/view",
        marca: clubColombia,
        marca_logo: clubColombia_logo
    },
    {
        _id: "3",
        name: "Inkanto",
        image: inkanto,
        subtitle: "Cocina Peruana",
        description: "Destacado por ofrecer una experiencia única a los amantes de la fusión peruana en Cartagena de Indias por más de cinco años, platos para acompañar con variedades de Club Colombia.",
        category: "Restaurante",
        url_reserva: "https://api.whatsapp.com/send?phone=573184987259&text=Hola!%20quiero%20contactar%20a%20Inkanto%20Cartagena",
        promo: "",
        carta: "https://issuu.com/graninkacartagena/docs/menu_gran_inka_espan_ol_julio_22_compressed/1?ff",
        marca: clubColombia,
        marca_logo: clubColombia_logo
    },
    {
        _id: "4",
        name: "Casa Cruxada",
        image: casa_cruxada,
        subtitle: "Cocina típica fusión",
        description: "Espacio con tres ambientes en donde la alta gastronomía, la música los espacios para tomar algo se unen para ofrecer una experencia única a acompañar con una refrescante Stella Artois.",
        category: "Restaurante",
        url_reserva: "https://restaurante.covermanager.com/reservas-casa-cruxada/",
        promo: "https://www.perfectservestella.com/",
        carta: "https://casacruxada.com/wp-content/uploads/2023/11/Carta_CC_QR-w-J.pdf",
        marca: stella,
        marca_logo: stella_logo
    },
    {
        _id: "5",
        name: "Mistura",
        image: mistura,
        subtitle: "Cocina fusión",
        description: "Sabores del mundo se unen para compartir alrededor de la mesa en compañía de una buena Stella Artois, platos de talla mundial entre los que se encuentran la cocina asiática y los cortes de carne fina.",
        category: "Restaurante",
        url_reserva: "https://mistura-1.cluvi.co/mistura-cartagena-2/reservar",
        promo: "https://www.perfectservestella.com/",
        carta: "https://mistura-1.cluvi.co/mistura-cartagena-2/menu-digital/home",
        marca: stella,
        marca_logo: stella_logo
    },
    {
        _id: "6",
        name: "Uma",
        image: uma,
        subtitle: "Cantina Peruana",
        description: "Restaurante que reúne los mejores sabores de la cocina peruana utilizando producto local Colombiano en un solo lugar, sabores ideales para acompañar con una Stella Artois recien servida.",
        category: "Restaurante",
        url_reserva: "https://www.covermanager.com/reservation/module_restaurant/uma-cartagena/spanish?source=Instagram",
        promo: "https://www.perfectservestella.com/",
        carta: "https://www.umacantinaperuanactg.com/bebemos/",
        marca: stella,
        marca_logo: stella_logo
    },
    {
        _id: "7",
        name: "La Unica",
        image: la_unica,
        subtitle: "Cantina Mexicana",
        description: "Concepto innovador de cantina, con un ámplio menú de mar y tierra inspirado en las cocinas regionales de la costa del pacífico y del norte de México, en La Única se encuentran sabores ideales para acomapañar de una buena Stella Artois.",
        category: "Restaurante",
        url_reserva: "https://launica.precompro.com/select?source=instagram&fbclid=PAZXh0bgNhZW0CMTEAAaYtXepo07zGPSAaT4TO57gTP73osrqBya55YiJIPPp4aPVqBg2wHkQIR5M_aem_Moa84kU1m4F4I5_bdnMzSw",
        promo: "https://www.perfectservestella.com/",
        carta: "https://la-unica.cluvi.co/la-unica/menu-digital/home?fbclid=PAZXh0bgNhZW0CMTEAAaY2dD9_oE4jzQ5sPOXLHkY3Kv-kKbfviaeqkPsN4mxcqwF_igwsi0HBa6c_aem_3Jlz8_BX7frT-1igF7elBQ",
        marca: stella,
        marca_logo: stella_logo
    },
    {
        _id: "8",
        name: "Hotel Movich",
        image: hotel_movich,
        subtitle: "Rooftop",	
        description: "Rooftop ideal para relajarse en el último piso del hotel Movich con una Corona fría y una vista excepcional al centro de la Ciudad. ",
        category: "Rooftop",
        url_reserva: "",
        promo : "https://paraisoscorona.com/",
        carta: "",
        marca: corona,
        marca_logo: corona_logo
    },
    {
        _id: "9",
        name: "Urania Rooftop",
        image: urania_rooftop,
        subtitle: "Rooftop",
        description: "Ubicado en la terraza del hotel Sophia, Urania ofrece comida de la mejor calidad y una vista inigualable para disfrutar de un atardecer con una Corona fría. ",
        category: "Rooftop",
        url_reserva: "",
        promo: "https://paraisoscorona.com/",
        carta: "",
        marca: corona,
        marca_logo: corona_logo
    },
    {
        _id: "10",
        name: "Marina Todomar",
        image: marina_todomar,
        subtitle: "Marina",
        description: "Punto de partida para vivir las mejores experencias en islas cerca a Cartagena, un plan ideal para acompañar con una buena Corona. ",
        category: "Marinas",
        url_reserva: "",
        promo: "https://paraisoscorona.com/",
        carta: "",
        marca: corona,
        marca_logo: corona_logo
    }
]
