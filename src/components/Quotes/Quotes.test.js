import { render, screen } from '@testing-library/react';

import { Quotes } from './Quotes';


const quote = 'test quote';
const speaker = 'random speaker';

test('renders received quote, speaker and a button', () => {
	render(<Quotes quote={quote} speaker={speaker} />);
	
	const quoteElemt = screen.getByText(quote);
	const speakerElemt = screen.getByText(`- ${speaker}`);
	const buttonElemt = screen.getByRole('button');
	
	expect(quoteElemt).toBeInTheDocument();
	expect(speakerElemt).toBeInTheDocument();
	expect(buttonElemt).toBeInTheDocument();
});

