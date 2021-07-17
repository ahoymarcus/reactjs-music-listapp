import styled from 'styled-components';

import { connet } from 'react-redux';

// A busca do arquivo index.js é automática
import { Item } from '../../components';



export const List = ({ todoList, children }) => {
	
	
	
	return (
		<>
			<ListSubTitle>
				{children}
			</ListSubTitle>
			<p>{todoList}</p>
			<UList>
				{todoList.map((id, item) => {
					<LI key={id} ><Item item={item} >Item</Item></LI>
				})}
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


