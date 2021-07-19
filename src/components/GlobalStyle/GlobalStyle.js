import { createGlobalStyle } from 'styled-components';

import bgImg from '../../assets/images/redish-moon-smaller.jpg';


export const GlobalStyle = createGlobalStyle`
	background: url(${bgImg}) center no-repeat;
	background-size: cover;
	color: #332c36;
	padding: 0;
	margin: 0;
	font-family: 'New Tegomin', serif;
`;




