'use client'

import { Card, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export interface IService {
	title: string
	index: number
	price: number
	imageUrl: string
}

export function Service({ imageUrl, index, price, title }: IService) {
	const { ref, inView } = useInView({
		threshold: 0,
	})

	const isPair = index % 2
	const animate = isPair === 0 ? 'animate-slideLeft' : 'animate-slideRight'

	const [hasAnimated, setHasAnimated] = useState<boolean>(false)

	if (inView && !hasAnimated) {
		setHasAnimated(true)
	}

	return (
		<Card key={index} ref={ref} className={`${hasAnimated && animate}`}>
			<div>
				<Image
					src={imageUrl}
					alt={title}
					width={240}
					height={240}
					className="rounded-t-xl"
				/>
			</div>
			<CardFooter className="w-full text-sm font-semibold items-center justify-center py-4">
				{title} R$ {price}
			</CardFooter>
		</Card>
	)
}
