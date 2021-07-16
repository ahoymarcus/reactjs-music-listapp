export const Item = ( {children, item} ) => {
	
	
	return (
		<>
			<a href="/" className="item-lista">
				{children} 
			</a> 
			- {item}
		</>
	);
};




