import styled from 'styled-components';

import { Nav, Footer, Card } from '../../components';
import { List } from '../../containers';



export const MusicList  = () => {
	
	
	return (
		<div>
			<Nav />
			<ListTitle>Music List App</ListTitle>
			<List>Testa lista</List>
			<Card />
			<Footer />
		</div>
	);
};

const ListTitle = styled.h1`
	margin-bottom: 30px;
	text-align: center;
`;

