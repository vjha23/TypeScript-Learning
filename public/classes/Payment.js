// classes
export class Payment {
    // private client: string;
    // private details: string;
    // amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owes ${this.amount} for ${this.details}`;
    }
}
