import { ReactNode } from 'react'

interface ISection {
	theme?: 'light' | 'dark'
	id: string
	title: string
	children: ReactNode
	className?: string
	ref?: (node?: Element | null) => void
}

export function Section({
	id,
	theme = 'dark',
	children,
	className,
	title,
	ref,
}: ISection) {
	return (
		<section
			ref={ref}
			id={id}
			className={`py-8 space-y-6 ${className} ${
				theme == 'dark' ? '' : 'bg-zinc-100 text-zinc-950'
			}`}
		>
			<h2 className="font-semibold text-xl text-center">{title}</h2>
			{children}
		</section>
	)
}
