export type Product = { id: string; title: string; category: 'Hoodies' | 'Tees' | 'Accessories'; price: number; color: string; ink: string; sizes: string[]; description: string };
export const products: Product[] = [
{ id:'after-hours-hoodie', title:'After Hours Hoodie', category:'Hoodies', price:899, color:'#282726', ink:'#eee7db', sizes:['S','M','L','XL'], description:'An oversized silhouette with a bold chest graphic. A concept piece for the first HOOD REVENGE collection.' },
{ id:'revenge-tee', title:'Revenge Heavyweight Tee', category:'Tees', price:449, color:'#e5ded0', ink:'#282726', sizes:['S','M','L','XL'], description:'A relaxed everyday tee with our signature wordmark. A concept piece for the first collection.' },
{ id:'signal-hoodie', title:'Signal Hoodie', category:'Hoodies', price:949, color:'#bb492b', ink:'#eee7db', sizes:['S','M','L','XL'], description:'A statement colour and oversized shape. A concept piece made to stand apart.' },
{ id:'uniform-tee', title:'Uniform Tee', category:'Tees', price:449, color:'#373932', ink:'#dedbca', sizes:['S','M','L','XL'], description:'An understated colour with a strong graphic. Your next everyday uniform, presented here as a sample.' },
{ id:'night-shift-beanie', title:'Night Shift Beanie', category:'Accessories', price:249, color:'#292827', ink:'#e6dfd1', sizes:['One size'], description:'A cuffed beanie concept with a signature woven-style badge.' },
{ id:'off-grid-tee', title:'Off Grid Tee', category:'Tees', price:499, color:'#333333', ink:'#df6135', sizes:['S','M','L','XL'], description:'Dark tones and a high-contrast graphic. A sample design for the next drop.' }
];
export const money = (amount:number) => new Intl.NumberFormat('en-ZA',{style:'currency',currency:'ZAR',maximumFractionDigits:0}).format(amount);
