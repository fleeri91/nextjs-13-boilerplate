import React from 'react';
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from './Button';
expect.extend(toHaveNoViolations);

describe('Button', () => {
	it('should not have any accessibility issues', async () => {
		const { container } = render(<Button>Test</Button>);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
