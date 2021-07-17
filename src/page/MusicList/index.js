import { useState } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/todo';

import { Nav, Footer, Input, Button, Card } from '../../components';
import { List } from '../../containers';



export const MusicList  = () => {
	const [ input, setInput ] = useState();
	const [ todoList, setTodoList ] = useState([]);
	
	
	function onClick() {
		console.log('button was clicked');
		setTodoList(todoList => todoList.concat(input));
		console.log(todoList);
		
		/*CUIDADO com sintaxe para class component*/
		//const { addTodo } = this.props;
		//const { input } = this.state;
		// addTodo(input);
	}
	function onChange(e) {
		console.log('input was changed', e.target.value);
		
		setInput(e.target.value);
	}
	
	
	
	return (
		<div>
			<Nav />
			<ListTitle>Music List App</ListTitle>
			<List todoList={todoList} >Testa lista</List>
			<Input onChange={(e) => onChange(e)} value={input} />
			<Button onClick={onClick} >Add</Button>
			
			<Card />
			<Footer />
		</div>
	);
};

const ListTitle = styled.h1`
	margin-bottom: 30px;
	text-align: center;
`;


/*CUIDADO para class components*/
// const mapStateToProps = input => ({
	// listTodo: input.todo
// };)

// export default connect(
	// mapStateToProps, 
	// { addTodo }
// )(MusicList);


