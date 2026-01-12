
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