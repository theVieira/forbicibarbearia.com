import Image from 'next/image'
import { ScheduleButton } from './schedule-button'
import { Routes } from '@/constants/routes'

export function Header() {
	return (
		<header className="px-4 py-2 animate-slideIn">
			<ul className="flex items-center justify-between">
				<li className="select-none">
					<Image src={'/logo.png'} width={50} height={50} alt="Logo" />
				</li>
				<nav className="flex gap-2">
					{Routes.map(({ url, title }, index) => (
						<li key={index}>
							<a
								href={url}
								className="text-zinc-300 hover:text-zinc-50 transition-all font-semibold"
							>
								{title}
							</a>
						</li>
					))}
				</nav>
				<ScheduleButton className="hidden md:block" />
			</ul>
		</header>
	)
}
