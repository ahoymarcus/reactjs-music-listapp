import styled from 'styled-components';

// A busca do arquivo index.js é automática
import { Item } from '../../components';



export const List = ({ todoList, children }) => {
	let counter = 0;
	
	
	return (
		<>
			<ListSubTitle>
				{children}
			</ListSubTitle>
			<UList>
				{todoList.map((id, name) => {
					<LI key={id} ><Item item={name} >Item {counter++}</Item></LI>
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


