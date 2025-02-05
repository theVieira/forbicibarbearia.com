import { ScheduleButton } from '@/components/schedule-button'
import { Section } from '@/components/section'
import { Instagram, Phone } from 'lucide-react'
import Image from 'next/image'

export function Contact() {
	return (
		<Section
			id="contact"
			title="Contato"
			theme="light"
			className="flex flex-col gap-6 items-center justify-center"
		>
			<div className="flex gap-4 items-center">
				<Instagram size={32} />
				<Phone size={32} />
			</div>
			<ScheduleButton />
			<Image
				src={'/logo.png'}
				alt="Logo"
				width={80}
				height={80}
				className="bg-black rounded-full gap-2"
			/>
		</Section>
	)
}
