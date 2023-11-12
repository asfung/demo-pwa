export interface ProductsType {
    id? : number,
    name? : string,
    category? : string,
    price? : number,
    image? : string,
    description? : string
}

export interface FormField {
    id?: string;
    name?: string;
    label?: string;
    type?: string;
    value?: string | object;
    placeholder?: string;
    checked?: boolean;
    required?: boolean;
}