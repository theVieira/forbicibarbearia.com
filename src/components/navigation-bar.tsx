import Image from 'next/image'
import Link from 'next/link'

interface NavigationItem {
	path: string
	title: string
}

const NavigationItems: NavigationItem[] = [
	{
		path: '#home',
		title: 'Início',
	},
	{
		path: '#services',
		title: 'Serviços',
	},
	{
		path: '#plans',
		title: 'Planos',
	},
	{
		path: '#about',
		title: 'Sobre',
	},
]

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
				{NavigationItems.map(({ path, title }, index) => (
					<li key={index}>
						<Link
							href={path}
							className="font-semibold hover:brightness-75 transition-all"
						>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
