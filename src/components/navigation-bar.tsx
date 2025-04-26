import Image from 'next/image'
import Link from 'next/link'

export function NavigationBar() {
	return (
		<nav className="px-12 flex items-center justify-between">
			<Image
				src="/logo.png"
				alt="logo"
				width={60}
				height={60}
				className="hidden sm:block"
			/>
			<ul className="w-full flex items-center justify-center sm:justify-end gap-4 py-4 sm:py-0">
				<li>
					<Link href="#home">Início</Link>
				</li>
				<li>
					<Link href="#services">Serviços</Link>
				</li>
				<li>
					<Link href="#plans">Planos</Link>
				</li>
				<li>
					<Link href="#about">Sobre</Link>
				</li>
			</ul>
		</nav>
	)
}
