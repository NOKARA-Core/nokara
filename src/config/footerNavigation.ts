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
		title: 'Nokara Community',
		aboutText:
			'Wadah komunitas IT, kolaborasi rekayasa perangkat lunak, dan showcase talenta digital di Timika, Papua. Terinspirasi dari filosofi Noken Papua, bagian dari inisiatif ekosistem NOKARA.ID.',
		logo: {
			src: '/Logo-Nokara-Dark.png',
			alt: 'Nokara Community Logo',
			text: 'Nokara Community'
		}
	},
	footerColumns: [
		{
			category: 'Komunitas & Belajar',
			subCategories: [
				{
					subCategory: 'Karya Member',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Roadmap Talenta',
					subCategoryLink: '/education'
				},
				{
					subCategory: 'Tanya Jawab (FAQ)',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Catatan Rilis & Kegiatan',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Ketentuan Layanan',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Tentang NOKARA.ID',
			subCategories: [
				{
					subCategory: 'Induk Resmi Nokara.id',
					subCategoryLink: 'https://nokara.id'
				},
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
					subCategory: 'Blog Komunitas',
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
			'© 2026 Nokara Community. Bagian dari NOKARA.ID. Dibuat dengan dedikasi oleh Muhammad Amin Hidayat (Founder Nokara.id - www.nokara.id)'
	}
}
