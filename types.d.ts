import { ForwardRefExoticComponent } from 'react'

interface ProductCollectionData {
    readonly id: number
    readonly name: string
    readonly price: number
    readonly originalPrice: number
    readonly image: string
    readonly colors: ProductCollectionColors[]
    readonly rating: number
    readonly badge: string
    readonly category: string
}

interface ProductCollectionColors {
    readonly name: string
    readonly color: string
}

interface GrowthStatsData {
    readonly number: string
    readonly icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
    readonly title: string
    readonly description: string
}

interface GrowthDetailData {
    readonly value: string
    readonly title: string
}

interface InteriorDesignOptionData {
    readonly id: number
    readonly icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
    readonly title: string
    readonly description: string
}

interface InteriorDesignImagesData {
    readonly id: number
    readonly src: string
    readonly alt: string
    readonly hoverText: string
}

export interface InteriorDesignGuideData {
    readonly id: number
    readonly number: string
    readonly numberColor: string
    readonly numberContainerBgColor: string
    readonly title: string
    readonly description: string
}

export interface TestimonialsData {
    readonly id: number
    readonly name: string
    readonly role: string
    readonly location: string
    readonly rating: number
    readonly text: string
    readonly image: string
}

export interface TestimonialRatingData {
    readonly id: number
    readonly number: number
    readonly icon: string
    readonly title: string
}

export type FooterLinksData = Record<string, FooterLinkData[]>

interface FooterLinkData {
    readonly name: string
}

export interface SocialLinks {
    readonly name: string
    readonly icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
    readonly href: string
}

export interface PrivacyPolicies {
    readonly id: number
    readonly name: string
}