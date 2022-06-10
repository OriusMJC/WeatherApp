import s from './About.module.css'

export default function About(){
    return(
        <div className={s.aboutContainer}>
            <h1>WeatherApp</h1>
            <p>Weather App es un SPA (Single Page Application) 
                la cual consume información de una API externa 
                (OpenWeatherApp) y muestra en pantalla el clima 
                del lugar elegido por el usuario.
            </p>
            Si quieres ver más de mis trabajos puedes visitar estos links:
            <br/>
            <br/>
            <a href="https://github.com/OriusMJC" target='_blank'>GitHub</a>
            <br/>
            <a href="https://www.linkedin.com/in/matias-jesus-contreras-b78111217/" target='_blank'>Linkedin</a>
        </div>
    )
}