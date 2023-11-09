import {Suspense} from 'react'
import Scene from './Scene'
import './home.scss'

const Home = () => {
  return (
   <>
      <section className='banner'>
        <article className='texto'>
          <h1>Diseña Tu Taza Perfecta</h1>
          <p>Bienvenido a Creo & Creo, tu destino para la sublimación de tazas de alta calidad. Explora nuestra colección y descubre cómo convertir tus tazas en auténticas obras de arte.</p>
        </article>
        <img src="./tazaBanner.png" alt="" />
      </section>

      <div className={"container"}>
        <div className={"wrapper"}>
          <Suspense fallback={null}> 
            <article className={'quienes__somos'}>
              <h1>Quienes Somos</h1>
              <p>Nos apasiona la sublimación de tazas. Nuestro equipo está dedicado a proporcionarte tazas de alta calidad que destacan por su durabilidad y diseño. Con años de experiencia en el negocio, hemos perfeccionado el arte de la sublimación, ofreciéndote resultados impecables</p>
            </article>

            <article className='nuertras__tazas'>
              <h1>Nuestras Tazas Personalizadas</h1>
              <p>Nuestra colección de tazas personalizadas abarca una amplia variedad de estilos, tamaños y diseños. Ya sea que desees una taza con una foto familiar, un mensaje motivador o un diseño único, tenemos la taza perfecta para ti. Cada taza está hecha con materiales de calidad y técnicas de sublimación de última generación para garantizar que tu diseño luzca impecable.</p>
            </article>
            <Scene/>
          </Suspense>
        </div>
      </div>
      
   </>
    
  )
}

export default Home