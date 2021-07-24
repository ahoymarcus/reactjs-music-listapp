import styled from 'styled-components';



export const Input = ({ onChange, value }) => {
	
	
	return (
		<GenericInput type="text" onChange={onChange} value={value} />
	);
};

const GenericInput = styled.input`
	margin-left: 10px;
	padding: 5px;
	border-radius: 6px;
`;


