import React from 'react'
import portfolio1 from '../img/portfolio1.webp'
import portfolio2 from '../img/portfolio2.webp'
import portfolio3 from '../img/portfolio3.webp'
import portfolio4 from '../img/portfolio4.webp'
import portfolio5 from '../img/portfolio5.webp'
import portfolio6 from '../img/portfolio6.webp'



import logo from '../img/logo.png'

import historia from '../img/historia.webp'
// import ntvg381 from '../img/ntvg381.webp'
// import bahiablancaNTVG from '../img/bahiablancaNTVG.webp'
// import lapampaNTVG from '../img/lapampaNTVG.webp'
// import mendozaNTVG from '../img/mendozaNTVG.webp'
// import rosarioNTVG from '../img/rosarioNTVG.webp'
// import sanjuanNTVG from '../img/sanjuanNTVG.webp'
// import tandilNTVG from '../img/tandilNTVG.webp'
// import barilocheNTVG from '../img/barilocheNTVG.webp'


export const VariablesContext = React.createContext()

const VariablesProvider = (props) => {


    const variablesGlobales = {
        iframeUbicacion: '',
        tituloUbicacion: 'Ubicación',
        direccion: '',
        mailTo: '',
        mail: '',
        iframeAlt: '',
        logo: logo,        
        altLogo: "logo tuentrada",
        altImg: "ciro y los persas",
        venueName: 'CIRO Y LOS PERSAS',
        tuentradaName: 'tuentrada.com',
        linkTuentrada: "https://tuentrada.com",
        linkVenueFb: "https://www.facebook.com/andresciromartinez",
        linkVenueTw: "https://twitter.com/ciroylospersas",
        linkVenueIg: "https://www.instagram.com/ciroylospersasoficial/",
        volver: 'Volver',
        tituloEventos: 'PRÓXIMOS SHOWS',
        tituloImagenes: 'CIRO Y LOS PERSAS',
        portfolioImg1: portfolio1,
        portfolioImg2: portfolio2,
        portfolioImg3: portfolio3,
        portfolioImg4: portfolio4,
        portfolioImg5: portfolio5,
        portfolioImg6: portfolio6,
        imgEventos1: 'https://www.tuentrada.com/images/621f68a1531cf.webp',
        imgEventos2: 'https://www.tuentrada.com/images/621f6abfc6db2.webp',
        imgEventos3: 'https://www.tuentrada.com/images/621f65495bdbf.webp',
        elementoNavbar1: 'Shows',
        elementoNavbar2: 'Historia',
        elementoNavbar3: 'Imágenes',
        elementoNavbar4: 'Ubicacion',
        tituloInicio: '',
        botonInicio: 'SHOWS',
        tituloHistoriaArriba: '',
        tituloHistoriaAbajo: '',
        imagenHistoria: historia,
        descripcion1: "Luego de concluir 2021 llenado dos Luna Park y un Movistar Arena en Buenos Aires, y de comenzar 2022 agotando entradas en el Polideportivo de Mar del Plata, Ciro anuncia su regreso. Viene de comunicar su regreso a Vélez para octubre, en lo que será el quinto estadio de fútbol que haga en su carrera solista (ya se presentó en Ferro dos veces, otra en Vélez, y en River)",
        descripcion2: ""
        
    }

    const [variables, setVariables] = React.useState(variablesGlobales)




    return (
        <VariablesContext.Provider value={{variables, setVariables}}>
            {props.children}
        </VariablesContext.Provider>
    )
}

export default VariablesProvider
