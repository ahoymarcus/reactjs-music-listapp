import styled from 'styled-components';

export const Item = ( {children, item} ) => {
	
	
	return (
		<>
			<A href="/" className="item-lista">
				{children} 
			</A> 
			{item}
		</>
	);
};

const A = styled.a`
	color: #f1e7e6;
	text-decoration: none;
`;


