import type { Component } from 'solid-js';

import Footer from '@components/Footer';
import NavBar from '@components/Nav';
import styles from './App.module.css';
import Home from './pages/home/Home';

const App: Component = () => {
	return (
		<div class={`${styles.App}`}>
			<NavBar />
			<Home />
			<Footer />
		</div>
	);
};

export default App;
