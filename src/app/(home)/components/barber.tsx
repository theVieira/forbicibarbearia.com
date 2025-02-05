'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export interface IBarber {
	name: string
	imageUrl: string
	index: number
}

export function Barber({ name, imageUrl, index }: IBarber) {
	const { ref, inView } = useInView({
		threshold: 0,
	})

	const isPair = index % 2
	const animation = isPair === 0 ? 'animate-slideLeft' : 'animate-slideRight'

	const [hasAnimated, setHasAnimated] = useState<boolean>(false)

	if (inView && !hasAnimated) {
		setHasAnimated(true)
	}

	return (
		<Card
			ref={ref}
			className={`w-[240px] h-[240px] flex items-end justify-center pb-4 text-yellow-500 uppercase font-semibold relative -z-20 border-none ${
				hasAnimated && animation
			}`}
		>
			<Image
				src={imageUrl}
				alt={name}
				width={240}
				height={240}
				className="absolute top-0 -z-10 rounded-xl animate-fadeIn"
			/>
			{name}
		</Card>
	)
}
