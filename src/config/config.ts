// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface ContactInfo {
	contact: string
	support: string
	admin: string
}

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
	emails: ContactInfo
}

export const contactEmails: ContactInfo = {
	contact: 'contact@nokara.id',
	support: 'support@nokara.id',
	admin: 'admin@nokara.id'
}

export const configData: Config = {
	siteTitle: 'Nokara Community | Wadah Pegiat IT & Talenta Digital Timika Papua',
	siteDescription:
		'Platform komunitas IT, wadah belajar rekayasa perangkat lunak, dan showcase karya talenta digital di Timika, Papua. Bagian dari inisiatif ekosistem NOKARA.ID.',
	ogImage: '/og.jpg',
	logo: {
		src: '/Logo-Nokara-Dark.png',
		alt: 'Nokara Community Logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true,
	emails: contactEmails
}
