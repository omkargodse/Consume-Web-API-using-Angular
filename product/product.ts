export class Product{

    constructor(
        public id:number,
        public name:string,
        public barcode:string,
        public IsActive:boolean,
        public rate:number,
        public buyingPrice:number){}
}