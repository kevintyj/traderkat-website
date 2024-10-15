import type { Component } from 'solid-js';
import bg from '@assets/abf-bg.png';
import phone from '@assets/abf-screenshot.png';
import phoneMobile from '@assets/abf-screenshot-mobile.png';
import bellLeft from '@assets/bell-l.png';
import bellRight from '@assets/bell-r.png';
import logo from '@assets/logo-light.png';
import Button from '@components/shared/Button';

import GradientText from '@components/shared/GradientText';
import { createSignal } from 'solid-js';
import { Motion, Presence } from 'solid-motionone';
import './Home.css';

const PlayButton: Component = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170" fill="none" class="absolute left-1/2 top-1/2 h-36 w-36 transform md:h-[170px] md:w-[170px] -translate-x-1/2 -translate-y-1/2">
			<g filter="url(#filter0_bdi_438_1479)">
				<circle cx="85" cy="85" r="64" fill="black" fill-opacity="0.64" />
			</g>
			<path
				d="M112.106 78.479C117.126 81.377 117.126 88.6222 112.106 91.5203L77.0945 111.734C72.0749 114.632 65.8004 111.01 65.8004 105.214L65.8004 64.7856C65.8004 58.9894 72.0749 55.3668 77.0945 58.2649L112.106 78.479Z"
				fill="white"
				fill-opacity="0.66"
			/>
			<defs>
				<filter
					id="filter0_bdi_438_1479"
					x="0.428572"
					y="0.428572"
					width="169.143"
					height="169.143"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="4.51765" />
					<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_438_1479" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="10.2857" />
					<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
					<feBlend
						mode="normal"
						in2="effect1_backgroundBlur_438_1479"
						result="effect2_dropShadow_438_1479"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect2_dropShadow_438_1479"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="4.57143" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend mode="normal" in2="shape" result="effect3_innerShadow_438_1479" />
				</filter>
			</defs>
		</svg>
	);
};

const YouTubePopout: Component<{ videoId: string; onClose: () => void }> = (props) => {
	return (
		<Motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			class="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black bg-opacity-75 p-4"
			onClick={props.onClose}
		>
			<Motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.9, opacity: 0 }}
				transition={{ duration: 0.3 }}
				class="relative max-w-sm w-full cursor-default rounded-3xl bg-white p-2 shadow-2xl"
				onClick={e => e.stopPropagation()}
			>
				<a
					onClick={props.onClose}
					class="absolute right-[-12px] top-[-12px] text-white hover:text-gray-300 focus:outline-none"
				>
					<Button square>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</Button>
				</a>
				<div class="aspect-[9/16] overflow-hidden rounded-2xl">
					<div class="relative h-full w-full">
						<iframe
							class="absolute left-1/2 top-1/2 h-[177.78%] w-[177.78%] origin-center scale-[0.5625] -translate-x-1/2 -translate-y-1/2"
							src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&fs=0&controls=1&disablekb=1&loop=1&playlist=${props.videoId}`}
							allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						>
						</iframe>
					</div>
				</div>
			</Motion.div>
		</Motion.div>
	);
};

const AboveTheFold: Component = () => {
	const [showVideo, setShowVideo] = createSignal(false);

	return (
		<>
			<section class="border-btm relative h-full w-full flex items-center justify-center overflow-hidden bg-blue-7">
				<div class="max-container z-1 w-full flex flex-col items-center gap-8 text-center">
					<span class="h-12 w-full md:h-48"></span>
					<img src={logo} class="h-[48px] resize-none md:hidden" height="48px" />
					<h1 class="heading text-6xl text-white font-600 md:text-8xl sm:text-7xl">
						<GradientText>Stop</GradientText>
						{' '}
						wasting time
						creating alerts.
					</h1>
					<a target="_blank" href="https://coinmeerkat.onelink.me/a7gb/eguvlg43" class="z-24 md:hidden"><Button store size="large">Download today!</Button></a>
					<div class="relative mt-[-80px] md:mt-[-100px]">
						<a class="absolute inset-0 z-10 w-full flex cursor-pointer items-center justify-center" onClick={() => setShowVideo(true)}>
							<PlayButton />
						</a>
						<div class="relative hidden md:block">
							<img src={phone} alt="Phone screenshot" />
							<Motion.img
								src={bellLeft}
								alt="Left bell"
								class="absolute left-[25%] top-1/3 h-auto w-32 transform -translate-y-1/2"
								animate={{
									rotate: [0, -3, 0, 5, 0],
									scale: [1, 1.05, 1, 1.03, 1],
								}}
								transition={{
									duration: 2.5,
									// @ts-expect-error Motion easing function
									ease: 'ease-in',
									repeat: Infinity,
								}}
							/>
							<Motion.img
								src={bellRight}
								alt="Right bell"
								class="absolute right-[27%] top-1/2 h-auto w-16 transform -translate-y-1/2"
								animate={{
									rotate: [0, 5, 0, -5, 0],
									scale: [1, 1.03, 1, 1.05, 1],
								}}
								transition={{
									duration: 2,
									// @ts-expect-error Motion easing function
									ease: 'ease-in',
									repeat: Infinity,
								}}
							/>
						</div>
						<img src={phoneMobile} class="block scale-[105%] pb-3 md:hidden" alt="Mobile phone screenshot" />
					</div>
				</div>
				<img src={bg} class="absolute inset-0 z-0 h-full w-full object-cover"></img>
			</section>
			<section
				class="border-btm amber-bg flex items-center justify-center py-8 text-white md:py-12"
			>
				<h3 class="heading max-container text-align-center text-2xl md:text-3xl">
					<span class="font-600 italic">Finally</span>
					, a simplified alerting app for Crypto investors.
				</h3>
			</section>
			<Presence>
				{showVideo() && (
					<YouTubePopout
						videoId="G1PTBbmYw1w"
						onClose={() => setShowVideo(false)}
					/>
				)}
			</Presence>
		</>
	);
};

export default AboveTheFold;
