interface IRoute {
	url: string
	title: string
}

export const Routes: IRoute[] = [
	{
		url: '#home',
		title: 'Início',
	},
	{
		url: '#services',
		title: 'Serviços',
	},
	{
		url: '#about',
		title: 'Sobre',
	},
	{
		url: '#team',
		title: 'Equipe',
	},
	{
		url: '#contact',
		title: 'Contato',
	},
]
