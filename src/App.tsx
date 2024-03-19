import { ThemeProvider } from 'styled-components';

import AppRoutes from './app-routes';
import Navbar from './components/Navbar';
import Container from './components/Container';
import { CartProvider } from './context/CartContext';
import useTheme from './hooks/useTheme';

function App() {
	const theme = useTheme();
	
	return (
		<ThemeProvider theme={theme}>
			<CartProvider>
				<Navbar />
				<Container>
					<AppRoutes />
				</Container>
			</CartProvider>
		</ThemeProvider>
	);
}

export default App;
