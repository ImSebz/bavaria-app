import bar from './bar.jpg';
import cartaIcon from './carta.svg';
import clubColombia from './club_colombia.svg';
import clubColombia_logo from './club_colombia_logo.svg';
import corona from './corona.svg';
import corona_logo from './corona_logo.svg';
import facebook_icon from './facebook_icon.svg';
import instagram_icon from './instagram_icon.svg';
import logoHighEnd from './logo_high_end.svg';
import mapaIcon from './mapa.svg';
import marinas from './marinas.jpg';
import reservaIcon from './reserva.svg';
import restaurante from './restaurante.jpg';
import rooftop from './rooftop.jpg';
import stella from './stella.svg';
import stella_logo from './stella_logo.svg';
import x_icon from './x_icon.svg';

export const assets = {
    bar,
    cartaIcon,
    clubColombia,
    clubColombia_logo,
    corona,
    corona_logo,
    facebook_icon,
    instagram_icon,
    logoHighEnd,
    mapaIcon,
    marinas,
    reservaIcon,
    restaurante,
    rooftop,
    stella,
    stella_logo,
    x_icon,
};

export const sites_list_cali = [
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
        site_name: "Discoteca",
        site_image: marinas
    },
]

export const location_list_cali = [
    // {
    //     _id: "1",
    //     address: "Av Carlos Escallón Cra 8 # 34-01",
    //     carta: "",
    //     category: "Restaurante",
    //     description: "",
    //     dress_code: "No shorts",
    //     image_carousel: [don_juan1, don_juan2, don_juan3, don_juan4, don_juan5, don_juan6, don_juan7, don_juan8],
    //     image: don_juan,
    //     lat: 10.423491, 
    //     lng: -75.548849, 
    //     marca_logo: stella_logo,
    //     marca: stella,
    //     marker: don_juan_marker,
    //     name: "Don Juan",
    //     promo: "https://scann.stellaartois.co/?utm_source=qr&utm_medium=HE&utm_campaign=Stella-Perfect-Serve&utm_term=restaurantes-landing-desktop",
    //     schedule: "7pm - 11pm",
    //     subtitle: "Cocina Caribe",
    //     url_reserva: "https://donjuan.precompro.com/select/",
    // },

    {
        _id: "1",
        address: "AV 6 BIS NTE 27-50",
        carta: "https://app.menupp.co/restaurant/laflordelacanela?fbclid=PAZXh0bgNhZW0CMTEAAaY4XFPNbnOpnxKYvpFPPa-QK9IRyxc5XL102uMGhE27nu5fxl5XLmlHK5k_aem_IO8Xo_U9ld3yokJvZsLxSQ ",
        category: "Restaurante",
        description: "",
        dress_code: "Camisa botones negra con nuestros logos",
        image_carousel: [],
        image: restaurante,
        lat: -7.6529,
        lng: -34.698,
        marca_logo: clubColombia_logo,
        marca: clubColombia,
        marker: null,
        name: "Restaurante La Flor De La Canela",
        promo: "",
        schedule: "12:00m - 10:00pm",
        subtitle: "Restaurante",
        url_reserva: "https://app.menupp.co/restaurant/laflordelacanela?fbclid=PAZXh0bgNhZW0CMTEAAaY4XFPNbnOpnxKYvpFPPa-QK9IRyxc5XL102uMGhE27nu5fxl5XLmlHK5k_aem_IO8Xo_U9ld3yokJvZsLxSQ",
    },

]
