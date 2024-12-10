import bar from './bar.jpg';
import cartaIcon from './carta.svg';
import clubColombia from './club_colombia.svg';
import clubColombia_logo from './club_colombia_logo.svg';
import corona from './corona.svg';
import corona_logo from './corona_logo.svg';
import facebook_icon from './facebook_icon.svg';
import florDeLaCanela from './flor_de_la_canela.jpg';
import florDeLaCanela1 from './flor_de_la_canela1.jpg';
import florDeLaCanela2 from './flor_de_la_canela2.jpg';
import instagram_icon from './instagram_icon.svg';
import la_casona from './la_casona.jpeg';
import la_casona1 from './la_casona1.jpeg';
import la_casona2 from './la_casona2.jpeg';
import la_casona3 from './la_casona3.jpeg';
import la_casona4 from './la_casona4.jpg';
import logoHighEnd from './logo_high_end.svg';
import mapaIcon from './mapa.svg';
import marinas from './marinas.jpg';
import reservaIcon from './reserva.svg';
import restaurante from './restaurante.jpg';
import rooftop from './rooftop.jpg';
import stella from './stella.svg';
import stella_logo from './stella_logo.svg';
import tres_fronteras from './tres_fronteras.jpg';
import tres_fronteras1 from './tres_fronteras1.jpg';
import x_icon from './x_icon.svg';

export const assets = {
    bar,
    cartaIcon,
    clubColombia_logo,
    clubColombia,
    corona_logo,
    corona,
    facebook_icon,
    florDeLaCanela,
    florDeLaCanela1,
    florDeLaCanela2,
    instagram_icon,
    la_casona,
    la_casona1,
    la_casona2,
    la_casona3,
    la_casona4,
    logoHighEnd,
    mapaIcon,
    marinas,
    reservaIcon,
    restaurante,
    rooftop,
    stella_logo,
    stella,
    tres_fronteras,
    tres_fronteras1,
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
        image_carousel: [florDeLaCanela1, florDeLaCanela2],
        image: florDeLaCanela,
        lat: 3.4698,
        lng: -76.529,
        marca_logo: clubColombia_logo,
        marca: clubColombia,
        marker: null,
        name: "Restaurante La Flor De La Canela",
        promo: "",
        schedule: "12:00m - 10:00pm",
        subtitle: "Restaurante",
        url_reserva: "https://app.menupp.co/restaurant/laflordelacanela?fbclid=PAZXh0bgNhZW0CMTEAAaY4XFPNbnOpnxKYvpFPPa-QK9IRyxc5XL102uMGhE27nu5fxl5XLmlHK5k_aem_IO8Xo_U9ld3yokJvZsLxSQ",
    },

    {
        _id: "2",
        address: "KR 38 D 4 C 54",
        carta: "https://linktr.ee/lacasonavallunacali?lt_utm_source=lt_share_link#321602347",
        category: "Restaurante",
        description: "",
        dress_code: "Gorra café, camisa café con logo nuestro",
        image_carousel: [la_casona1, la_casona2, la_casona3, la_casona4],
        image: la_casona,
        lat: 3.42621,
        lng: -76.5467,
        marca_logo: clubColombia_logo,
        marca: clubColombia,
        marker: null,
        name: "Restaurante La Casona",
        promo: "",
        schedule: "12:00m - 2:00am",
        subtitle: "Restaurante",
        url_reserva: "https://linktr.ee/lacasonavallunacali?lt_utm_source=lt_share_link#321602347",

    },
    {
        _id: "3",
        address: "AV 2 N 7-09",
        carta: "https://app.menupp.co/restaurant/boitara?fbclid=PAAaa_-G6sA-M-5o29OyrS9YHkyLOTJZyS7JwbLcA9X5SfHPQFDaNhv8PiYV0_aem_Aaer9WIV8pBrJcn89PnqLSinsJO-kUkVH_vCRp1WcqKMrJoukD4ffskagYwi34o517Y",
        category: "Restaurante",
        description: "",
        dress_code: "Camisa negra o blanca, delantal vinotinto o bage",
        image_carousel: [tres_fronteras1],
        image: tres_fronteras,
        lat: 3.4538091554,
        lng: -76.53721256,
        marca_logo: clubColombia_logo,
        marca: clubColombia,
        marker: null,
        name: "3 Fronteras",
        promo: "",
        schedule: "12:00m - 11:00pm",
        subtitle: "Restaurante",
        url_reserva: "https://app.menupp.co/restaurant/boitara?fbclid=PAAaa_-G6sA-M-5o29OyrS9YHkyLOTJZyS7JwbLcA9X5SfHPQFDaNhv8PiYV0_aem_Aaer9WIV8pBrJcn89PnqLSinsJO-kUkVH_vCRp1WcqKMrJoukD4ffskagYwi34o517Y",

    }

]
