import styled from 'styled-components';



export const Input = ({ onChange, value }) => {
	
	
	return (
		<GenericInput type="text" onChange={onChange} value={value} />
	);
};

const GenericInput = styled.input`
	margin-left: 10px;
	margin-bottom: 16px;
	padding: 5px;
	border-radius: 6px;
	min-width: 240px;
`;


