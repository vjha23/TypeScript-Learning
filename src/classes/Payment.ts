import { HasFormatter } from '../Interfaces/HasFormatter.js'
// classes
export class Payment implements HasFormatter {
    // private client: string;
    // private details: string;
    // amount: number;
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.recipient} owes ${this.amount} for ${this.details}`
    }
}