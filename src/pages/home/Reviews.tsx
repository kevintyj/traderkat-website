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
			'Now I know what a work-life balance is',
			'I cannot thank the Zero team enough for creating this well-polished app. Zero, along with a healthy ketogenic diet, helped me lose over 100 lbs — and still going strong!',
		],
		[
			'I can stop worrying about my trades, and focus on whats next',
			'I cannot thank the Zero team enough for creating this well-polished app. Zero, along with a healthy ketogenic diet, helped me lose over 100 lbs — and still going strong!',
		],
		[
			'Must-have for investors with more than 20 coins in their watchlist',
			'I cannot thank the Zero team enough for creating this well-polished app. Zero, along with a healthy ketogenic diet, helped me lose over 100 lbs — and still going strong!',
		],
		[
			'Now I know what a work-life balance is',
			'I cannot thank the Zero team enough for creating this well-polished app. Zero, along with a healthy ketogenic diet, helped me lose over 100 lbs — and still going strong!',
		],
		[
			'I can stop worrying about my trades, and focus on whats next',
			'I cannot thank the Zero team enough for creating this well-polished app. Zero, along with a healthy ketogenic diet, helped me lose over 100 lbs — and still going strong!',
		],
		[
			'Must-have for investors with more than 20 coins in their watchlist',
			'I cannot thank the Zero team enough for creating this well-polished app. Zero, along with a healthy ketogenic diet, helped me lose over 100 lbs — and still going strong!',
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
						<div class="hidden px-12 md:block">
							<Slider options={{ slides: { perView: 3, spacing: 8 }, loop: true }}>
								<For each={reviewList}>
									{review => (
										<Review heading={review[0]} desc={review[1]} />
									)}
								</For>
							</Slider>
						</div>
						<div class="px-12 md:hidden">
							<Slider options={{ slides: { perView: 1, spacing: 8 }, loop: true }}>
								<For each={reviewList}>
									{review => (
										<Review heading={review[0]} desc={review[1]} />
									)}
								</For>
							</Slider>
						</div>
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
					</SliderProvider>
				</div>
				<div class="flex flex-col gap-2">
					<Button store size="xlarge">Check out the app</Button>
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
