import { ScheduleButton } from '@/components/schedule-button'

export function HomeSection() {
	return (
		<section
			id="home"
			className="relative flex items-center justify-center h-[60vh]"
		>
			<div className="absolute inset-0 bg-[url(/inside_unity_2.JPG)] bg-cover bg-center brightness-50 z-0" />
			<div className="relative z-10 text-white flex items-center justify-center flex-col gap-6 w-full h-full">
				<span className="text-center">
					<p className="text-4xl text-yellow-600">Forbici Barbearia</p>
					<p className="text-md text-zinc-400">Sua barbearia por assinatura</p>
				</span>
				<ScheduleButton phone="+55 (69) 99362-5749" />
			</div>
		</section>
	)
}
