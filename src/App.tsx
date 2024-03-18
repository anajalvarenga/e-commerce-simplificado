import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar';
import useTheme from './hooks/useTheme';
import Home from './pages/home';

function App() {
	const theme = useTheme();
	
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
