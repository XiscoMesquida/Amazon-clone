import React from 'react'
import "./Home.css"
import Product from "./Product";



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" 
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt="" />
        
        <div className="home__row">
        <Product 
        id="498263491"
        title='La Teoría Sintergica Tapa blanda, 19 septiembre 2020' 
        price= {21.84} 
        image='https://m.media-amazon.com/images/I/41yxXxDdSlL._SX331_BO1,204,203,200_.jpg'
        rating={5}
        />
        <Product
        id="1369816923"
        title="Zoom - H6-BLK - grabadora de 6 pistas - interface USB - Black Edition" 
        price={324}
        rating={5}
        image="https://m.media-amazon.com/images/I/61Cx4r-LXjL._AC_SX679_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
        id="99923423"
        title="ExcelValley - 12-Pack Cables de Conexión Mono Modulares Híbridos TS 3,5mm 1/8" 
        price={26.30}
        rating={5}
        image="https://m.media-amazon.com/images/I/81Bs2Si7FoS._AC_SX679_.jpg"
        />
        <Product
        id="224719365"
        title="2022 Apple Ordenador Portátil MacBook Air con Chip M2 de Apple" 
        price={1.335}
        rating={5}
        image="https://m.media-amazon.com/images/I/71uJwr1IrZL._AC_SX679_.jpg"
        />
        <Product
        id="77512513"
        title="Corsair VENGEANCE RGB PRO 32GB, 2x16GB, DDR4 3200MHz C16 Módulos de Memoria de Adecuado Rendimiento, Negro" 
        price={114.89}
        rating={5}
        image="https://m.media-amazon.com/images/I/71Y0p1wL66L._AC_SX679_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
        id="2158699"
        title="ASUS ProArt PA32UCG-K - Monitor Profesional 32 pulgadas 4K HDR, 1600 nits, Mini-LED, 120 Hz VRR, FreeSync2 HDR, Dolby Vision, HDR-10, HLG, DCI-P3, Thunderbolt 3, HDMI v2.1, VESA DisplayHDR 1400, Negro" 
        price={5.447}
        rating={5}
        image="https://m.media-amazon.com/images/I/81YRHdHsfwL._AC_SX679_.jpg"
        />
            
        </div>
      </div>
    </div>
  )
}

export default Home