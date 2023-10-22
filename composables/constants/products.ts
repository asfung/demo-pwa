import { ProductsType } from "~/types/ProductsType";

export const products: ProductsType[] = [
    {
        id: 1,
        name: "kaos polos",
        category: "Baju",
        price: 20_000,
        image: "/images/products/product_1.jpeg",
        description: "baju polos terbagus sepanjang masa",
    },
    {
        id: 2,
        name: "abibas",
        category: "Sepatu",
        price: 500_000,
        image: "/images/products/product_2.jpeg",
        description: "sepatu dengan style yang cocok untuk anak remaja",
    },
    {
        id: 3,
        name: "baju belang",
        category: "Baju",
        price: 350_000,
        image: "/images/products/product_3.jpeg",
        description: "baju dengan dengan motif yang sangat memukau",
    },
    {
        id: 4,
        name: "geohot's girlfriend",
        category: "Hardware",
        price: 999_999_999,
        image: "/images/products/product_4.jpeg",
        description: "this is geohot things when he doing prompt debug",
    },
];