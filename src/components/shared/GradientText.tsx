import type { ParentComponent } from 'solid-js';

const GradientText: ParentComponent = (props) => {
	return (
		<span
			class="inline-block from-orange-400 to-yellow-400 bg-gradient-to-r bg-clip-text text-transparent"
			// style="-webkit-text-stroke: 1px rgba(256, 256, 256, 0.36);"
		>
			{props.children}
		</span>
	);
};

export default GradientText;
