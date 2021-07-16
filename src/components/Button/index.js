import styled from 'styled-components';



export const Button = ( {children, onClick} ) => {
	
	
	return (
		<GenericButton 
			class="generic-button" 
			onClick={onClick}
		>
			{children}
		</GenericButton>
	);
};

const GenericButton = styled.button`
	margin-left: 10px;
	padding: 5px;
	margin-bottom: 10px;
`;


