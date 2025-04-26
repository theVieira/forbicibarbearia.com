import { Card, CardContent } from '@/components/ui/card'

export function AboutSection() {
	return (
		<section id="about" className="p-6 pb-0">
			<p className="text-2xl text-zinc-300 text-center mb-6">Sobre nós</p>
			<div className="w-full flex items-center justify-center p-6 pt-0">
				<Card className="max-w-3xl">
					<CardContent className="p-6 text-center">
						<p className="text-zinc-300 text-lg">
							Na Forbici Barbearia, tradição e modernidade se encontram para
							oferecer a você a melhor experiência em cuidados pessoais. Nossa
							missão é proporcionar mais do que um corte de cabelo ou barba: é
							entregar momentos de bem-estar, confiança e estilo.
						</p>
						<p className="text-zinc-400 text-sm mt-4">
							Com uma equipe especializada, ambiente confortável e atendimento
							personalizado, estamos prontos para transformar seu visual e
							valorizar sua identidade.
						</p>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}
