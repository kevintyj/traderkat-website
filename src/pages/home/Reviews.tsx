import type { Component } from 'solid-js';
import arrowLeft from '@assets/arrow-l.svg';
import arrowRight from '@assets/arrow-r.svg';
import rating from '@assets/rating-full.svg';
import Button from '@components/shared/Button';
import { For } from 'solid-js';
import { Slider, SliderButton, SliderProvider } from 'solid-slider';

import 'solid-slider/slider.css';
import './Home.css';

type ReviewProp = Component< & {
	heading: string
	desc: string
}>;

const Review: ReviewProp = (prop) => {
	return (
		<div class="h-58 max-w-sm flex flex-col items-start gap-2 rounded-md bg-white px-6 py-4.5">
			<p class="text-xl text-orange-500 font-700">
				{prop.heading}
			</p>
			<p class="review-text opacity-80">
				{prop.desc}
			</p>
			<img src={rating} class="h-6 w-auto" />
		</div>
	);
};

const Reviews: Component = () => {
	const reviewList: Array<[string, string]> = [
		[
			'I can stop worrying about my trades, and focus on whats next',
			'Having Traderkat notify me on my entire watchlist has changed the way I trade. I cannot go back to what I was doing.',
		],
		[
			'Must-have for investors with more than 20 coins in their watchlist',
			'Saves me more time and headache than the subscription I pay every month, worth every penny! Would love more people to know about this app.',
		],
		[
			'I make more predictable decisions now',
			'Before, my strategy was to look at a chart until something stood out at me, now Traderkat notifies me exactly when certain positions meet my threshold, making my trades much more predictable.',
		],
		[
			'Finally, a solution for my busy job',
			'I\'m not able to look at my trades on Tradingview at my job, but Traderkat allows me to get the same information through my phone, which has been helpful to me.',
		],
		[
			'Now I know what a work-life balance is',
			'I used to be so worried about my option positions, with Traderkat, I can know immediately when large price movements happen across my entire watchlist so that I know when to execute my trades. ',
		],
	];

	return (
		<section class="amber-bg border-btm w-full flex flex-col items-center py-16">
			<div class="max-container flex flex-col items-center gap-12">
				<h2 class="heading max-w-3xl text-align-center text-5xl">
					Traderkat
					{' '}
					<span class="font-600 italic">really</span>
					{' '}
					helps investors reach their
					{' '}
					<span class="font-600 italic">full</span>
					{' '}
					potential.
				</h2>

				<div class="relative max-w-[100vw] w-full overflow-hidden">
					<SliderProvider>
						<div class="relative hidden px-12 md:block">
							<Slider options={{ slides: { perView: 3, spacing: 8 }, loop: true }}>
								<For each={reviewList}>
									{review => (
										<Review heading={review[0]} desc={review[1]} />
									)}
								</For>
							</Slider>
							<SliderButton
								prev
								class="absolute left-2 top-1/2 z-10 h-full flex items-center rounded-md bg-[rgba(255,255,255,0.64)] px-2 -translate-y-1/2"
							>
								<img src={arrowLeft} alt="Previous" />
							</SliderButton>
							<SliderButton
								next
								class="absolute right-2 top-1/2 z-10 h-full flex items-center rounded-md bg-[rgba(255,255,255,0.64)] px-2 -translate-y-1/2"
							>
								<img src={arrowRight} alt="Next" />
							</SliderButton>
						</div>
					</SliderProvider>

					<SliderProvider>
						<div class="relative px-12 md:hidden">
							<Slider options={{ slides: { perView: 1, spacing: 8 }, loop: true }}>
								<For each={reviewList}>
									{review => (
										<Review heading={review[0]} desc={review[1]} />
									)}
								</For>
							</Slider>
							<SliderButton
								prev
								class="absolute left-2 top-1/2 z-10 h-full flex items-center rounded-md bg-[rgba(255,255,255,0.64)] px-2 -translate-y-1/2"
							>
								<img src={arrowLeft} alt="Previous" />
							</SliderButton>
							<SliderButton
								next
								class="absolute right-2 top-1/2 z-10 h-full flex items-center rounded-md bg-[rgba(255,255,255,0.64)] px-2 -translate-y-1/2"
							>
								<img src={arrowRight} alt="Next" />
							</SliderButton>
						</div>
					</SliderProvider>
				</div>
				<div class="flex flex-col gap-2">
					<a target="_blank" href="https://coinmeerkat.onelink.me/a7gb/eguvlg43">
						<Button store size="xlarge">Check out the app</Button>
					</a>
					<p class="opacity-60">
						Exclusive offer:
						{' '}
						<span class="font-600">14-day free trial</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
