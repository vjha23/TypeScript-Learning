import { HasFormatter } from '../Interfaces/HasFormatter.js'
// classes
export class Invoice implements HasFormatter {
    // private client: string;
    // private details: string;
    // amount: number;
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}