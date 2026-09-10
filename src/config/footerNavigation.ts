// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Nokara',
		aboutText:
			'Solusi rekayasa perangkat lunak, aplikasi kasir toko, dan digitalisasi bisnis terpercaya untuk pelaku usaha di Timika, Papua, dan Indonesia Timur. Terinspirasi dari filosofi Noken Papua.',
		logo: {
			src: '/Logo-Nokara-Dark.png',
			alt: 'Nokara Logo',
			text: 'Nokara'
		}
	},
	footerColumns: [
		{
			category: 'Layanan & Solusi',
			subCategories: [
				{
					subCategory: 'Fitur Unggulan',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Paket & Estimasi',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'Tanya Jawab (FAQ)',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Catatan Rilis',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Ketentuan Layanan',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Tentang Nokara',
			subCategories: [
				{
					subCategory: 'Profil Founder',
					subCategoryLink: 'https://nokara.id/about'
				},
				{
					subCategory: 'Portofolio Nokara.id',
					subCategoryLink: 'https://nokara.id/work'
				},
				{
					subCategory: 'Layanan Enterprise',
					subCategoryLink: 'https://nokara.id/services'
				},
				{
					subCategory: 'Blog & Edukasi',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Kontak Resmi',
			subCategories: [
				{
					subCategory: 'contact@nokara.id',
					subCategoryLink: 'mailto:contact@nokara.id'
				},
				{
					subCategory: 'support@nokara.id',
					subCategoryLink: 'mailto:support@nokara.id'
				},
				{
					subCategory: 'admin@nokara.id',
					subCategoryLink: 'mailto:admin@nokara.id'
				},
				{
					subCategory: 'Formulir Kontak',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText:
			'© 2026 Nokara. Dibuat dengan dedikasi oleh Muhammad Amin Hidayat (Founder Nokara.id - www.nokara.id)'
	}
}
