import { Product } from "./Product";

export class SimpleDataSource {
    private products : Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"samsung s5","telefon",1000),
            new Product(2,"samsung s6","telefon",2000),
            new Product(3,"samsung s7","telefon",3000),
            new Product(4,"samsung s7","telefon",4000)
        );
    }
    getProducts() : Product[] {
        return this.products;
    }
}
