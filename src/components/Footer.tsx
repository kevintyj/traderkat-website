import type { Component } from 'solid-js';
import logo from '@assets/makedelta-logo.png';
import si1 from '@assets/s-icon-1.svg';
import si2 from '@assets/s-icon-2.svg';
import si3 from '@assets/s-icon-3.svg';
import si4 from '@assets/s-icon-4.svg';
import si5 from '@assets/s-icon-5.svg';

const Footer: Component = () => {
	return (
		<div class="flex flex-col items-center justify-center gap-8 py-8 text-sm">
			<div class="flex flex-col items-center gap-2">
				<p class="opacity-60">
					Created with ❤️ by investors, for investors by
				</p>
				<a target="_blank" href="http://en.makedelta.io/"><img src={logo} class="h-auto w-42 opacity-70" /></a>
			</div>
			<div class="flex flex-row gap-4">
				<a href="https://www.facebook.com/traderkatapp"><img src={si1} class="h-6 w-6" /></a>
				<a href="https://x.com/traderkatapp"><img src={si2} class="h-6 w-6" /></a>
				<a href="https://instagram.com/traderkatapp"><img src={si3} class="h-6 w-6" /></a>
				<a href="https://discord.gg/b34ygu7aBe"><img src={si4} class="h-6 w-6" /></a>
				<a href="https://www.youtube.com/@traderkatapp"><img src={si5} class="h-6 w-6" /></a>
			</div>
			<div class="flex flex-col items-center gap-1 pb-8 opacity-60">
				<p>
					Copyright 2024 Makedelta
				</p>
				<div>
					<a class="text-blue-300">Privacy Policy</a>
					{' '}
					|
					{' '}
					<a class="text-blue-300">Terms of Service</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
