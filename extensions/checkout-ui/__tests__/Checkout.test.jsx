import { mount } from '@remote-ui/testing'
import { createRoot } from '@remote-ui/react'
import Checkout from '../src/Checkout'

describe('Header', () => {
	it('renders the header', () => {
		const app = mount((root) => {
			createRoot(root).render(<Checkout />)
		})
	})
})