import type { Component } from 'solid-js';
import phone from '@assets/feature-sc.png';
import phoneMobile from '@assets/features-sc-mobile.png';

import Button from '@components/shared/Button';
import GradientText from '@components/shared/GradientText';
import { createSignal, For, onCleanup } from 'solid-js';
import { Motion } from 'solid-motionone';
import './Home.css';

type FeatListProps = Component< & {
	heading: string
	body: string
}>;

const FeatureList: FeatListProps = (props) => {
	return (
		<li>
			<h3 class="heading pb-2 text-3xl">
				{props.heading}
			</h3>
			<p class="opacity-60">
				{props.body}
			</p>
		</li>
	);
};

const Features: Component = () => {
	const featureListArr: Array<[string, string]> = [
		['Strategy creator', 'Simple, yet, fully customizable strategy creator built-in'],
		['Recommended strategies', 'Skip the complex indicators and jump right in with curated popular strategies'],
		['Complex strategies', 'Create strategies with up to 10 indicators, with complex features like whipsaw removal built-in'],
		['One strategy, one alert', 'Create alerts based on your strategy, not the coin'],
		['Up to 300 coins', 'Use unlimited strategies and watchlists to create up to 300 alert categories for your coins'],
		['Instant search & alerts', 'No delays, don’t let your platform slow your trades down. Reliable notifications, right on your phone'],
	];

	const rotatingWords = ['simple', 'efficient', 'powerful', 'intuitive'];
	const [currentWordIndex, setCurrentWordIndex] = createSignal(0);

	const rotateWords = () => {
		setCurrentWordIndex(prevIndex => (prevIndex + 1) % rotatingWords.length);
	};

	const intervalId = setInterval(rotateWords, 3000); // Rotate every 3 seconds

	onCleanup(() => clearInterval(intervalId));

	return (
		<section class="features-bg border-btm w-full flex flex-col items-center overflow-hidden">
			<div class="max-container my-16 flex flex-col md:my-24 md:flex-row lg:gap-72 md:gap-24">
				<div class="relative flex flex-col justify-between">
					<h1 class="heading pb-8 text-6xl text-white lg:w-md md:w-sm">
						Traderkat makes trading
						{' '}
						<Motion.span
							class="font-600"
							animate={{ opacity: [0, 1, 1, 0] }}
							transition={{
								duration: 3,
								repeat: Infinity,
							}}
						>
							<GradientText>
								{rotatingWords[currentWordIndex()]}
							</GradientText>
						</Motion.span>
					</h1>
					<img
						src={phone}
						class="absolute bottom-[-96px] hidden max-w-5xl lg:left-[-260px] md:left-[-200px] md:block lg:w-[200%] md:w-[180%]"
					/>
				</div>
				<div>
					<ul class="flex flex-col gap-8 text-white">
						<For each={featureListArr}>
							{(obj, _i) =>
								<FeatureList heading={obj[0]} body={obj[1]} />}
						</For>
					</ul>
				</div>
				<div class="flex flex-col items-center gap-2 pt-16 text-white md:hidden">
					<a target="_blank" href="https://coinmeerkat.onelink.me/a7gb/eguvlg43"><Button store size="large" color="white">Download Today</Button></a>
					<p class="opacity-60">
						Exclusive Offer:
						{' '}
						<span class="font-600">14-day free trial</span>
					</p>
				</div>
			</div>
			<img src={phoneMobile} class="mt-[-100px] md:hidden" />
		</section>
	);
};

export default Features;
