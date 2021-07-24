import styled from 'styled-components';

import { connet } from 'react-redux';



// A busca do arquivo index.js é automática
import { Item } from '../../components';



export const List = ({ todoList, children }) => {
	const list = todoList.map((cur, idx) => {
		return <Li key={idx} >
			<Item item={cur} >{idx + 1}- </Item>
		</Li>;
	});
	
	
	return (
		<>
			<ListSubTitle>
				{children}
			</ListSubTitle>
			<UList>
				{list}
			</UList>
		</>
	);
};

const ListSubTitle = styled.h2`
	font-size: 3.7em;
	margin-bottom: 60px; 
	padding-top: 20px;
	
	text-align: center;
	text-shadow: none;
`;
const UList = styled.ul`
	margin: 0 20px 30px;
	list-style: none;
	text-shadow: 0.5px 0.5px #ad5e5e91;
`;
const Li = styled.li`
	font-size: 20px;
	margin-bottom: 6px; 
`;


