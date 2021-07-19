import styled from 'styled-components';
import { string, func } from 'prop-types';

import { Button } from '../../components';



const Wrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Quote = styled.p`
	font-size: 2em;
	margin: 20px 0 5px;
`;

const Speaker = styled(Quote)`
	text-align: right;
	margin-bottom: 50px;
`;


export const Quotes = ({ quote, speaker, onUpdate }) => {
	
	return (
		<Wrapper>
			<p>Following your inspiration...</p>
			<Quote>{quote}</Quote>
			<Speaker>- {speaker}</Speaker>
			<Button onClick={onUpdate} >Music library</Button>
		</Wrapper>
	);
}; 

Quotes.propTypes = {
	quote: string,
	speaker: string,
	onUpdate: func
};


