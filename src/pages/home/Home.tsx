import type { Component } from 'solid-js';
import AboveTheFold from './AboveTheFold';
import BelowTheFold from './BelowTheFold';
import Discord from './Discord';
import Features from './Features';
import QuickStart from './QuickStart';
import Reviews from './Reviews';

const Home: Component = () => {
	return (
		<>
			<AboveTheFold />
			<BelowTheFold />
			<QuickStart />
			<Features />
			<Reviews />
			<Discord />
		</>
	);
};

export default Home;
