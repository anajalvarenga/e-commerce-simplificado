import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import useTheme from './hooks/useTheme';
import Home from './pages/home';

function App() {
	const theme = useTheme();
	
	return (
		<ThemeProvider theme={theme}>
			<CartProvider>
				<Navbar />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</ThemeProvider>
	);
}

export default App;
