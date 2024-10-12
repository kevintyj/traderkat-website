import type { ParentComponent } from 'solid-js';
import apple from '@assets/apple.svg';
import appleWhite from '@assets/apple-black.svg';
import playstore from '@assets/playstore.svg';
import { Show } from 'solid-js';
import './Button.css';

type ButtonProps = ParentComponent< & {
	color?: 'black' | 'white' | 'discord'
	size?: 'large' | 'xlarge'
	store?: boolean
	square?: boolean
}>;

const Button: ButtonProps = (props) => {
	return (
		<button
			class={`
				${props.color === 'white' ? 'btn-white-base text-black' : props.color === 'discord' ? 'btn-discord text-white' : 'btn-base text-white'}
				${props.square ? 'w-[32px] p-0' : 'p-x-4'}
				${props.size === 'large' ? 'h-[40px]' : props.size === 'xlarge' ? 'h-[48px] p-x-6' : 'h-[32px]'} 
				cursor-pointer flex items-center justify-center gap-2 rd-md font-600 transition-opacity duration-200 active:opacity-70 hover:opacity-93`}
		>
			<Show when={props.store}>
				<img src={props.color === 'white' ? appleWhite : apple} />
				<img src={playstore} />
			</Show>
			{props.children}
		</button>
	);
};

export default Button;
