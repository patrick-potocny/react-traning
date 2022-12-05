import {screen, render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';


describe('Header Component', () => {
  test('display logo', () => {
    render(<BrowserRouter><Header /></BrowserRouter>)    
    const logo = screen.getByText('Shop Logo')
    expect(logo.textContent).toBe('Shop Logo')
  });
});