'use client'

import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { toast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { format, startOfDay } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { redirect, RedirectType } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { Button } from './ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
} from './ui/select'

export const Barbers = [
	{
		value: 'Barbeiro 01',
		title: 'Barbeiro 01',
	},
	{
		value: 'Barbeiro 02',
		title: 'Barbeiro 02',
	},
	{
		value: 'Barbeiro 03',
		title: 'Barbeiro 03',
	},
	{
		value: 'Barbeiro 04',
		title: 'Barbeiro 04',
	},
]

export interface IScheduleButton {
	className?: string
	variant?: 'ghost' | 'default' | 'outline'
}

export function ScheduleButton({ variant, className }: IScheduleButton) {
	const [barber, setBarber] = useState<string>('')
	const [date, setDate] = useState<Date | undefined>()
	const [open, setOpen] = useState<boolean>(false)

	function handleOnSubmit(e: FormEvent) {
		e.preventDefault()

		if (!date) {
			toast({
				title: 'Ocorreu um erro no agendamento',
				description: 'Parece que você não selecionou uma data',
				variant: 'destructive',
			})
		} else {
			const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
			const today = startOfDay(new Date())
			const selectedDate = startOfDay(date)

			if (selectedDate < today) {
				toast({
					title: 'Ocorreu um erro no agendamento',
					description: 'Parece que você tentou agendar uma data que já passou',
					variant: 'destructive',
				})

				return
			}

			if (!phoneNumber)
				throw new Error('phone number is mandatory for the system to function')

			const encodedDate = encodeURIComponent(date.toString())
			const encodedBarber = encodeURIComponent(barber)

			const message = encodeURIComponent(
				`Olá, gostaria de saber a disponibilidade para o dia ${encodedDate} ${
					barber ? 'com o barbeiro ' + encodedBarber : ''
				}`
			)

			const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`

			toast({
				title: 'Agendamento',
				description:
					'Você está sendo redirecionado para o contato com a barbearia',
			})

			setOpen(false)

			redirect(whatsappLink, RedirectType.push)
		}
	}

	return (
		<Dialog open={open} onOpenChange={() => setOpen(!open)}>
			<DialogTrigger asChild className={className}>
				<Button variant={variant} className="font-semibold">
					Agendar horário
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Agende seu horário conosco</DialogTitle>
					<DialogDescription>
						Selecione o barbeiro e data para verificar a disponibilidade
					</DialogDescription>
				</DialogHeader>
				<form className="flex flex-col gap-4">
					<div className="flex items-center justify-between">
						<p className="font-semibold">Barbeiro</p>
						<Select onValueChange={setBarber}>
							<SelectTrigger className="max-w-[240px]">Selecione</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Barbeiros</SelectLabel>
									{Barbers.map(({ title, value }, index) => (
										<SelectItem key={index} value={value}>
											{title}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="flex items-center justify-between">
						<p className="font-semibold">Data</p>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={'outline'}
									className={cn(
										'w-[240px] justify-start text-left font-normal',
										!date && 'text-muted-foreground'
									)}
								>
									<CalendarIcon />
									{date ? format(date, 'dd/MM/yyyy') : <span>Pick a date</span>}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</div>
				</form>
				<DialogFooter>
					<div className="w-full max-w-[240px] flex justify-between">
						<Button variant={'outline'} onClick={() => setOpen(false)}>
							Cancelar
						</Button>
						<Button type="submit" onClick={handleOnSubmit}>
							Agendar agora
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
