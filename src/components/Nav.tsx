import type { Component } from 'solid-js';
import logo from '@assets/logo-dark.png';
import Button from '@components/shared/Button';
import './Nav.css';

const NavBar: Component = () => {
	return (
		<div class="fixed top-0 z-36 w-full">
			<div
				class="banner-top h-[36px] w-full flex items-center justify-center text-align-center text-white"
				style="box-shadow: inset 0 -1px 0 rgba(256, 256, 256, 0.18);"
			>
				<span class="max-container">
					🎉 Special beta testing event!
					{' '}
					<span class="hidden md:inline">Receive exclusive rewards for being our early adopters </span>
					➡️
				</span>
			</div>
			<div class="border-btm nav-top hidden h-[72px] w-full items-center justify-center bg-white md:flex">
				<div class="max-container flex flex-1 items-center justify-between">
					<img src={logo} class="h-12 w-auto" />
					<Button store size="large">
						Download Today!
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
