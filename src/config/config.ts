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
	siteTitle: 'Jasa Pembuatan Website Timika & Sistem Bisnis | Nokara',
	siteDescription:
		'Solusi pembuatan website, aplikasi kasir, dan sistem bisnis terpercaya di Timika & Papua. Digitalisasi usaha Anda bersama tim ahli Nokara!',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Nokara Logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true,
	emails: contactEmails
}
