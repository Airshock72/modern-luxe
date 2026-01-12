
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