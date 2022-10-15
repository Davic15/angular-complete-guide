export class Ingredient {
    public name: string;
    public amount: number;
    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }


    //* Another way to write this constructor.
    //*constructor(public name: string, public amount: number){}
}