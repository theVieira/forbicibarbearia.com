import { Section } from '@/components/section'
import { Barbers } from '@/constants/barbers'
import { Services } from '@/constants/services'
import Image from 'next/image'
import { Barber } from './components/barber'
import { Service } from './components/service'
import { About } from './components/about'
import { Contact } from './components/contact'

export default function Page() {
	return (
		<main>
			<section
				id="home"
				className="w-full h-screen max-h-[75vh] bg-[url(/background.png)] bg-cover bg-center flex items-center justify-center"
			>
				<span className="flex items-center justify-center flex-col">
					<Image
						src={'/logo.png'}
						width={360}
						height={360}
						alt="Logo"
						className="animate-fadeIn"
					/>
				</span>
			</section>
			<Section id="services" title="Serviços" className="animate-slideUp">
				<div className="flex gap-6 flex-wrap items-center justify-center">
					{Services.map(({ imageUrl, price, title }, index) => (
						<Service
							imageUrl={imageUrl}
							price={price}
							title={title}
							key={index}
							index={index}
						/>
					))}
				</div>
			</Section>
			<About />
			<Section id="team" title="Equipe">
				<div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-12">
					{Barbers.map(({ imageUrl, name }, index) => (
						<Barber name={name} imageUrl={imageUrl} key={index} index={index} />
					))}
				</div>
			</Section>
			<Contact />
		</main>
	)
}
