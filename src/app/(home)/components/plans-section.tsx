import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Check } from 'lucide-react'

interface Plan {
	title: string
	price: string
	benefits: string[]
}

const Plans: Plan[] = [
	{
		benefits: ['Corte ilimitado', 'Descontos', 'Benefícios'],
		price: '89,99',
		title: 'Corte',
	},
	{
		benefits: ['Barba ilimitada', 'Descontos', 'Benefícios'],
		price: '99,99',
		title: 'Barba',
	},
	{
		benefits: ['Corte ilimitado', 'Barba ilimitada', 'Descontos', 'Benefícios'],
		price: '179,99',
		title: 'Cabelo e Barba',
	},
]

export function PlansSection() {
	return (
		<section id="plans">
			<Card className="bg-gradient-to-r from-[#030712] via-[#050c21] to-[#040b1c] border-0 py-6 ">
				<CardContent>
					<p className="text-2xl text-zinc-200 text-center mt-6">Assinaturas</p>
					<div className="w-full flex items-center justify-center p-6 gap-6 flex-wrap">
						{Plans.map(({ benefits, price, title }, index) => (
							<Card key={index} className="max-w-60 h-52">
								<CardHeader>{title}</CardHeader>
								<CardContent>
									<p className="text-2xl text-zinc-50">R${price}</p>
									<ul>
										{benefits.map((benefit, index) => (
											<li
												key={index}
												className="flex items-center gap-1 text-zinc-300"
											>
												<Check size={16} />
												{benefit}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
