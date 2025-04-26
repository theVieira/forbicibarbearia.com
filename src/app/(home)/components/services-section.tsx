import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Service {
	title: string
	description: string
}

const Services: Service[] = [
	{
		title: 'Corte',
		description: 'Corte para todos os estilos',
	},
	{
		title: 'Barba',
		description: 'Modelagem profissional para sua barba',
	},
	{
		title: 'Tratamento',
		description: 'Hidratação e cuidados especiais com você',
	},
]

export function ServicesSection() {
	return (
		<section id="#services" className="p-6">
			<p className="text-2xl text-center text-zinc-300">Nossos serviços</p>
			<div className="w-full flex gap-4 items-center justify-center p-6 flex-wrap">
				{Services.map(({ description, title }, index) => (
					<Card key={index} className="max-w-60 space-y-[-1.2rem]">
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>
						<CardContent className="text-zinc-300">{description}</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}
