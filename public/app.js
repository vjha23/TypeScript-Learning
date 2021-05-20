import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Vijay', 'web work', 278);
// docTwo = new Payment('Mario', 'plumming ', 400);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo)
// console.log(docs);
// const invOne = new Invoice('Vijay', 'works on mario website', 260)
// const invTwo = new Invoice('Rahul', 'works on mario website', 300)
// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(inv => {
//     console.log(inv.format());
// })
//inputs
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instaces
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(type.value, tofrom.value, detail.value, amount.value);
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, detail.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, detail.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
