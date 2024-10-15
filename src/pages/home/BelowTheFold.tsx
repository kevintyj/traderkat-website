import type { Component, ParentComponent } from 'solid-js';
import rating from '@assets/rating.svg';
import Button from '@components/shared/Button';
import GradientText from '@components/shared/GradientText';

const CTAArrow: Component = () => {
	return (
		<svg width="57" height="63" viewBox="0 0 57 63" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2 61C15.2075 61 30.8906 58.1432 41.4704 52.6933C54.4025 46.0316 57.8396 34.0278 52.7404 24.0283C47.2687 13.2982 31.7867 8.89434 16.555 7.68723C13.7001 7.46098 21.4708 1.8823 21.6088 2.0019C23.631 3.75327 25.6519 9.11469 25.6519 11.364C25.6519 11.8987 27.5934 16.1179 25.5508 14.9386C21.6213 12.6697 16.1452 10.199 13.826 7.07444"
				stroke="#FCBB51"
				stroke-width="3"
				stroke-linecap="round"
			/>
		</svg>
	);
};

type StatsProps = ParentComponent< & {
	statText: string
	description: string
}>;

const StatsComponent: StatsProps = (props) => {
	return (
		<div class="flex flex-col items-center md:items-end">
			{props.children}
			<span class="heading text-3xl font-500 md:text-5xl md:font-400">{props.statText}</span>
			<p class="text-md opacity-60 md:text-lg">
				{props.description}
			</p>
		</div>
	);
};

const BelowTheFold: Component = () => {
	return (
		<section class="w-full flex justify-center bg-white py-12 md:py-24">
			<div class="max-container flex flex-col md:flex-row">
				<div class="flex flex-col items-center justify-between gap-4 md:items-inherit">
					<h2 class="heading pb-4 text-center text-4xl font-400 md:pb-24 md:text-center md:text-left md:text-6xl">
						Traderkat is a simple strategy alert tool that
						{' '}
						<span class="font-600"><GradientText>doubles</GradientText></span>
						{' '}
						your entry and exit opportunities.
					</h2>
					<div class="relative flex flex-col items-center md:items-inherit">
						<a target="_blank" href="https://coinmeerkat.onelink.me/a7gb/eguvlg43">
							<Button store size="xlarge">
								Download today!
							</Button>
						</a>
						<p class="pt-4 text-sm font-200 opacity-60">
							Exclusive offer:
							{' '}
							<span class="font-600">14-day free trial</span>
						</p>
						<div class="absolute inset-0 top-3.5 ml-[218px] hidden md:block"><CTAArrow /></div>
					</div>
				</div>
				<div class="h-full w-full flex flex-col items-center justify-between gap-4 py-8 text-right md:items-end md:gap-8">
					<StatsComponent
						statText="40k+"
						description="Downloads"
					>
					</StatsComponent>
					<StatsComponent
						statText="4.7 Star"
						description="Average Rating"
					>
						<img src={rating} class="h-6 md:h-8" />
					</StatsComponent>
					<StatsComponent
						statText="20k+"
						description="Strategies Created"
					>
					</StatsComponent>
				</div>
			</div>
		</section>
	);
};

export default BelowTheFold;
