// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Nokara - Solusi Bisnis Digital Papua',
		text: 'Nokara'
	},
	navItems: [
		{ name: 'Beranda', link: '/' },
		{ name: 'Paket & Harga', link: '/pricing' },
		{ name: 'Fitur', link: '/features' },
		{
			name: 'Pusat Edukasi',
			link: '#',
			submenu: [
				{ name: 'Blog & Artikel', link: '/blog' },
				{ name: 'Catatan Rilis', link: '/changelog' },
				{ name: 'Tanya Jawab (FAQ)', link: '/faq' },
				{ name: 'Ketentuan Layanan', link: '/terms' }
			]
		},
		{ name: 'Kontak', link: '/contact' }
	],
	navActions: [{ name: 'Konsultasi Sekarang', link: '/contact', style: 'primary', size: 'lg' }]
}
