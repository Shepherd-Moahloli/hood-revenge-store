import { NextApiRequest, NextApiResponse } from 'next';

const products = [
    {
        id: 1,
        name: 'Hoodie Revenge',
        slug: 'hoodie-revenge',
        price: 60,
        image: '/images/hoodie-revenge.jpg',
        description: 'A stylish hoodie for the ultimate streetwear look.',
    },
    {
        id: 2,
        name: 'Revenge Tee',
        slug: 'revenge-tee',
        price: 30,
        image: '/images/revenge-tee.jpg',
        description: 'A classic tee with a bold statement.',
    },
    {
        id: 3,
        name: 'Street Pants',
        slug: 'street-pants',
        price: 50,
        image: '/images/street-pants.jpg',
        description: 'Comfortable pants for everyday wear.',
    },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(products);
}