import React , {Component} from 'react';
import './Header.css';
import ImageManager from './ImageManager.js';

class Header extends Component{
	render(){
		return(
			<div id="header">
				<ImageManager>Immagine</ImageManager>
			</div>
		)
	}
}
export default Header;
