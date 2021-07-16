import { useState } from 'react';
import styled from 'styled-components';

import { Nav, Footer, Input, Button, Card } from '../../components';
import { List } from '../../containers';



export const MusicList  = () => {
	const [ input, setInput ] = useState();
	
	function add() {
		console.log('button was clicked');
	}
	function onChange(e) {
		// console.log('input was changed', e.target.value);
		
		setInput(e.target.value);
	}
	
	
	
	return (
		<div>
			<Nav />
			<ListTitle>Music List App</ListTitle>
			<List todoList={[]} >Testa lista</List>
			<Input onChange={(e) => onChange(e)} value={input} />
			<Button onClick={add} >Add</Button>
			
			<Card />
			<Footer />
		</div>
	);
};

const ListTitle = styled.h1`
	margin-bottom: 30px;
	text-align: center;
`;





