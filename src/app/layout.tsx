import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/toaster'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Forbici Barbearia - Barbearia em Cacoal',
	description:
		'Forbici Barbearia - acreditamos que um bom corte de cabelo e uma barba bem feita são mais do que estilo, são uma expressão de confiança e atitude. Localizada no coração de Cacoal - RO, oferecemos um atendimento diferenciado, focado na experiência do cliente e na excelência em cada detalhe.',
	keywords: [
		'Barbearia em Cacoal',
		'Forbici Barbearia',
		'Melhores barbearias em Cacoal',
		'Cacoal',
	],
	openGraph: {
		title: 'Forbici Barbearia - Barbearia em Cacoal',
		description:
			'Forbici Barbearia - acreditamos que um bom corte de cabelo e uma barba bem feita são mais do que estilo, são uma expressão de confiança e atitude. Localizada no coração de Cacoal - RO, oferecemos um atendimento diferenciado, focado na experiência do cliente e na excelência em cada detalhe.',
		siteName: 'Forbici Barbearia',
		url: 'https://forbicibarbearia.com',
		locale: 'pt_BR',
		type: 'website',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header />
				{children}
				<Toaster />
			</body>
		</html>
	)
}
