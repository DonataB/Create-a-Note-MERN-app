import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./globalStyles/GlobalStyles";
import NavigationBar from "./components/views/Navbar/Navbar";
import HomePage from "./components/views/HomePage/HomePage";
import NotesPage from "./components/views/Notes/NotesPage";
import CreateNotePage from "./components/views/CreateNote/CreateNotePage";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route path='/' element={<PagesWithNavigationBar />}>
						<Route path='/' element={<HomePage />} />
						<Route path="/create" element={<CreateNotePage />} />
						<Route path="/all-notes" element={<NotesPage />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

function PagesWithNavigationBar() {
	return (
		<>
			<NavigationBar />
			<Outlet />
		</>
	);
}

export default App;
