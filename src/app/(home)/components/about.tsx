'use client'

import { Section } from '@/components/section'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export function About() {
	const { ref, inView } = useInView({
		threshold: 0,
		delay: 200,
	})

	const [hasAnimated, setHasAnimated] = useState<boolean>(false)

	if (inView && !hasAnimated) {
		setHasAnimated(true)
	}

	return (
		<Section
			ref={ref}
			id="about"
			theme="light"
			title="Sobre"
			className={`flex flex-col items-center ${
				hasAnimated && 'animate-fadeIn'
			}`}
		>
			<div className="w-[80%] md:w-1/2 text-center">
				<p>
					<strong>Forbici Barbearia - Você pronto para conquistar</strong>
				</p>
				<p>
					Na Forbici Barbearia, acreditamos que um bom corte de cabelo e uma
					barba bem feita são mais do que estilo, são uma expressão de confiança
					e atitude. Localizada no coração de Cacoal - RO, oferecemos um
					atendimento diferenciado, focado na experiência do cliente e na
					excelência em cada detalhe.
				</p>
				<p>
					Com profissionais qualificados e um ambiente moderno, proporcionamos
					cortes e barbas personalizadas para que você saia daqui pronto para
					conquistar. Venha conhecer nosso espaço e descubra o que é um
					atendimento de alto nível.
				</p>
			</div>
		</Section>
	)
}
