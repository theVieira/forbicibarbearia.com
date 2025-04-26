'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'

interface IScheduleButton {
	phone: string
	message?: string
}

export function ScheduleButton({ phone, message }: IScheduleButton) {
	const [link, setLink] = useState<string>()

	useEffect(() => {
		const formattedPhone = phone.replace(/\D/g, '')

		let WhatsAppLink = `https://wa.me/${formattedPhone}`

		if (!message) return setLink(WhatsAppLink)

		const encoded = encodeURIComponent(message)
		WhatsAppLink += `?text=${encoded}`
		return setLink(WhatsAppLink)
	})

	return (
		<Button variant="outline">
			<a href={link} target="_blank" rel="noopener noreferrer">
				Agendar meu horário
			</a>
		</Button>
	)
}
