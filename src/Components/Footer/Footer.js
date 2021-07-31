import React from 'react'
import './footer.css'


const Footer = ()=>{

return (<footer className="contenedor" id="piedepagina">
<div className="redes-sociales">
  <div className="contenedor-icono">
    <a href="" target="_blank" className="twitter">
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="48" height="48" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg>
    </a>
  </div>
  <div className="contenedor-icono">
    <a href="www.linkedin.com/in/miguel-mazziotti-" target="_blank" className="facebook">
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="48" height="48" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="8" y1="11" x2="8" y2="16" />
  <line x1="8" y1="8" x2="8" y2="8.01" />
  <line x1="12" y1="16" x2="12" y2="11" />
  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg>
    </a>
  </div>
  <div className="contenedor-icono">
    <a href="https://www.instagram.com/miguelmazziotti/" target="_blank" className="instagram">
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="48" height="48" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="4" />
  <circle cx="12" cy="12" r="3" />
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
</svg>
    </a>
  </div>
</div>
<div className="creado-por">
  <p>Proyecto Final React js Miguel Mazziotti
   // Para consultas escribirme a mis redes
  </p>
</div>
</footer>
)
}
export default Footer

