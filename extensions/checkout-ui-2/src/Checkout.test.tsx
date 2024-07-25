import { mount } from '@remote-ui/testing'
import { createRoot } from '@remote-ui/react'
import { Extension } from './Checkout'
import * as Shopify from '@shopify/ui-extensions-react/checkout';
import '@remote-ui/testing/matchers';

jest.mock('@shopify/ui-extensions-react/checkout', () => {
	return {
		__esModule: true,
		...jest.requireActual('@shopify/ui-extensions-react/checkout'),
	};
});

jest
	.spyOn(Shopify, 'useTranslate')
	.mockImplementation(() => (translationKey: string) => translationKey as any);

jest.spyOn(Shopify, 'useApi').mockImplementation(() => ({ extension: { target: 'purchase.checkout.block.render' } }));

describe('Header', () => {
	it('renders the header', () => {
		const app = mount((root) => {
			createRoot(root).render(<Extension />)
		})

		expect(app).toContainRemoteText('welcome');
	})
})