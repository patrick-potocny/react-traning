import {render, screen} from '@testing-library/react' // (or /dom, /vue, ...)
import Home from '../Home';


describe('Home Component', () => {
  test('should show home Page', () => {
    render(<Home />)
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toBe('Welcome to our shops Home page')  
  })
});
