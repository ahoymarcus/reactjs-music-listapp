import styled from 'styled-components';



export const Button = ( {children, onClick} ) => {
	
	
	return (
		<GenericButton 
			className="generic-button" 
			onClick={onClick}
		>
			{children}
		</GenericButton>
	);
};

const GenericButton = styled.button`
	background: #dc872cad; /*#dc872c;*/
	color: #fff;
	border: none;
	border-radius: 0;
	font-size: 1.2em;
	padding: 10px 20px;
	font-family: 'New Tegomin', serif;
	cursor: pointer;
	box-shadow: #333 3px 3px;
	
	&:hover {
		background: #5f2424ad;
	}
`;


