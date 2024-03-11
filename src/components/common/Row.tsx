type Props = {
	type: 'horizontal' | 'vertical'
}

function Row({ type = 'vertical' }: Props) {
	return (
		<div
			className={`flex ${
				type === 'horizontal'
					? 'justify-between items-center'
					: 'flex-col gap-6'
			} `}
		></div>
	)
}

export default Row
