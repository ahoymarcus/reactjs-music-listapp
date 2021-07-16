import { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../components';



export const Card = () => {
	const [value, setValue] = useState(0);
	
	function plus() {
		setValue(value => value + 1);
	};
	function minus() {
		setValue(value => value - 1);
	};
	
	
	return (
		<CardWrapper className="card">
			<CardHeader className="card-header">
				Featured
			</CardHeader>
			<CardBody className="card-body">
				<CardTitle className="card-title">Card Title</CardTitle>
				
				<ButtonWrapper className="button-container">
					<Button 
						onClick={plus}
					>
						Plus
					</Button>
					<Button 
						onClick={minus}
					>
						Minus
					</Button>
				</ButtonWrapper>
				
				<p className="card-text">{value}</p>
			</CardBody>
		</CardWrapper>
	);
};

const CardWrapper = styled.div`
	width: 150px;
	margin: 20px 10px;
`;
const CardHeader = styled.div`
	background-color: #589a58;
	padding: 3px 0;
	text-align: center;
	border-radius: 6px 6px 0 0;
`;
const CardTitle = styled.h5`
	margin-bottom: 10px;
`;
const CardBody = styled.div`
	text-align: center;
	padding: 10px 0;
	border: 1px solid yellow;
	border-radius: 0 0 6px 6px;
`;
const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;




