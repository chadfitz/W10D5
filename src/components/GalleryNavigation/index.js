// import { BrowserRouter } from 'react-router-dom'

import { Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";



const GalleryNavigation = ({galleries}) => {
    console.log(galleries);
    return(
        <nav>
            <h1>Galleries</h1>
            {galleries.map(gallery => {
                <li><NavLink to={`/galleries/${gallery.galleryid}`}>test</NavLink>
                </li>
            })}
            <NavLink to="/">Home Page</NavLink>
        </nav>
    )   
}

export default GalleryNavigation;