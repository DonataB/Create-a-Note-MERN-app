import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./globalStyles/GlobalStyles";
import NavigationBar from "./components/views/Navbar/Navbar";
import HomePage from "./components/views/HomePage/HomePage";
import NotesPage from "./components/views/Notes/NotesPage";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route path='/' element={<PagesWithNavigationBar />}>
						<Route path='/' element={<HomePage />} />
						<Route path="/all-notes" element={<NotesPage />} />
						{/* <Route path="/create" element={<CreateNotes />} /> */}
					</Route>
				</Routes>
				<ToastContainer />
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
