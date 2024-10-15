import type { Component } from 'solid-js';
import discord from '@assets/discord.svg';
import Button from '@components/shared/Button';

const Discord: Component = () => {
	return (
		<section class="border-btm w-full flex justify-center bg-white py-12 pb-20">
			<div class="max-container flex flex-col items-start md:flex-row md:items-end md:gap-8">
				<div>
					<img src={discord} />
					<h2 class="heading pt-2 text-3xl">
						Join our Discord community to influence the future of Traderkat.
					</h2>
				</div>
				<div>
					<p class="py-2 text-lg opacity-60">
						Join our community to talk directly with the team and our users!
					</p>
					<a target="_blank" href="https://discord.gg/b34ygu7aBe"><Button color="discord" size="large">Join Today</Button></a>
				</div>
			</div>
		</section>
	);
};

export default Discord;
