import { ScheduleButton } from '@/components/schedule-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Phone } from 'lucide-react'
import Image from 'next/image'

interface IUnity {
	phone: string
	location: {
		neighborhood: string
		street: string
		number: string
	}
	image: {
		src: string
		alt: string
	}
}

const Unitys: IUnity[] = [
	{
		phone: '(69) 99362-5749',
		location: {
			neighborhood: 'Centro',
			number: '',
			street: 'Av. Belo Horizonte',
		},
		image: {
			src: '/facade_unity_2.JPG',
			alt: 'unity 2',
		},
	},
]

export function UnitysSection() {
	return (
		<section className="p-6">
			<p className="text-2xl text-zinc-300 text-center">Nossas unidades</p>
			<div className="w-full flex gap-6 items-center justify-center p-6">
				{Unitys.map(
					(
						{
							image: { alt, src },
							location: { neighborhood, number, street },
							phone,
						},
						index
					) => (
						<Card key={index} className="overflow-hidden">
							<CardHeader className="px-0 pt-0">
								<Image
									src={src}
									alt={alt}
									width={340}
									height={300}
									className="rounded-t-md"
								/>
							</CardHeader>
							<CardContent>
								<p>{neighborhood}</p>
								<p className="text-zinc-400">
									{street}, {number}
								</p>
								<p className="flex items-center gap-2">
									<Phone size={16} />
									{phone}
								</p>
							</CardContent>
							<CardFooter>
								<ScheduleButton phone={phone} />
							</CardFooter>
						</Card>
					)
				)}
			</div>
		</section>
	)
}
