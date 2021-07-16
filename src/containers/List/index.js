import styled from 'styled-components';

// A busca do arquivo index.js é automática
import { Item } from '../../components';



export const List = ({ children }) => {
	
	
	return (
		<>
			<ListSubTitle>{children}</ListSubTitle>
			<UList>
				<LI><Item item="Caderno">Item 1</Item></LI>
				<LI><Item item="Borracha">Item 2</Item></LI>
				<LI><Item item="Mochila">Item 3</Item></LI>
			</UList>
		</>
	);
};

const ListSubTitle = styled.h2`
	margin-bottom: 25px; 
	text-align: center;
`;
const UList = styled.ul`
	margin: 0 10px 30px;
`;
const LI = styled.li`
	margin-bottom: 6px; 
`;


