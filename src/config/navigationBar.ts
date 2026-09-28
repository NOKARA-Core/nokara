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
		src: '/Logo-Nokara-Dark.png',
		alt: "",
		text: ""
	},
	navItems: [
		{ name: 'Beranda', link: '/' },
		{ name: 'Roadmap', link: '/education' },
		{ name: 'Karya Member', link: '/features' },
		{
			name: 'Pusat Edukasi',
			link: '#',
			submenu: [
				{ name: 'Artikel & Tutorial IT', link: '/blog' },
				{ name: 'Tanya Jawab Komunitas (FAQ)', link: '/faq' },
				{ name: 'Pedoman & Kode Etik', link: '/terms' }
				// { name: 'Catatan Rilis & Kegiatan', link: '/changelog' } // Uncomment jika rute _changelog.astro diaktifkan kembali
			]
		},
		{ name: 'Kontak', link: '/contact' }
	],
	navActions: [
		{
			name: 'Gabung Komunitas',
			link: 'https://wa.me/6288242763942?text=Halo%20Nokara%20Community,%20saya%20ingin%20bergabung%20dengan%20komunitas%20IT%20Timika.',
			style: 'primary',
			size: 'lg'
		}
	]
}
