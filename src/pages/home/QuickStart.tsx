import type { Component } from 'solid-js';
import step1 from '@assets/step-1.png';
import step2 from '@assets/step-2.png';
import step3 from '@assets/step-3.png';

import GradientText from '@components/shared/GradientText';

type StepTextProps = Component< & {
	step: number
	heading: string
	subtext?: string
}>;

const StepText: StepTextProps = (props) => {
	return (
		<div class="mb-[-40px] h-42 max-w-52 overflow-hidden pt-12 md:mb-0 md:h-40">
			<span class="heading text-4xl font-700">
				<GradientText>
					{props.step}
					.
				</GradientText>
			</span>
			<h5 class="heading text-2xl font-500">{props.heading}</h5>
			<p class="text-sm opacity-60">{props.subtext}</p>
		</div>
	);
};

const QuickStart: Component = () => {
	return (
		<section class="border-btm w-full flex flex-col items-center bg-white">
			<div class="max-container flex flex-col justify-center gap-2 text-align-center">
				<h3 class="heading text-3xl font-400 md:text-5xl">
					Start in
					{' '}
					<span class="font-600"><GradientText>3 minutes</GradientText></span>
					{' '}
					or less.
				</h3>
				<p class="text-xl opacity-60 md:text-2xl">
					Literally, set it, and forget.
				</p>
			</div>
			<div class="flex flex-col text-align-center md:cols-3 md:flex-row" style="max-width: 1280px !important;">
				<div class="border-btm mb-[-1px] flex grow-1 flex-col items-center">
					<StepText step={1} heading="Create a Strategy" subtext="(or get started with our pre-made strategies)" />
					<div class="mt-[-40px] md:mx-[-40px]">
						<img src={step1} />
					</div>
				</div>
				<div class="border-btm mb-[-1px] flex grow-1 flex-col items-center">
					<StepText step={2} heading="Select your watchlist" />
					<div class="mt-[-40px] md:mx-[-40px]">
						<img src={step2} />
					</div>
				</div>
				<div class="border-btm mb-[-1px] flex grow-1 flex-col items-center">
					<StepText step={3} heading="Enjoy real-time alerts" />
					<div class="mt-[-40px] md:mx-[-40px]">
						<img src={step3} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default QuickStart;
