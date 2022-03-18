export const products = [
    {
        id: '1',
        title: 'ItemA',
        price: 890,
        image: '',
    },
    {
        id: '2',
        title: 'ItemB',
        price: 1400,
        image: '',
    },
    {
        id: '3',
        title: 'ItemC',
        price: 1000,
        image: '',
    },
    {
        id: '4',
        title: 'ItemD',
        price: 1500,
        image: '',
    },
    {
        id: '5',
        title: 'ItemE',
        price: 590,
        image: '',
    },
    {
        id: '6',
        title: 'ItemF',
        price: 440,
        image: '',
    },
    {
        id: '7',
        title: 'ItemG',
        price: 1200,
        image: '',
    },
    {
        id: '8',
        title: 'ItemH',
        price: 1800,
        image: '',
    },
    {
        id: '9',
        title: 'ItemI',
        price: 1600,
        image: '',
    },
    {
        id: '10',
        title: 'ItemJ',
        price: 1400,
        image: '',
    },
    {
        id: '11',
        title: 'ItemK',
        price: 1400,
        image: '',
    },
    {
        id: '12',
        title: 'ItemL',
        price: 1400,
        image: '',
    },
]


export const users = [
    {
        id: 'a',
        username: 'cinecus',
        email: 'cinecus@test.com',
        password: 'cc123',
    },
    {
        id: 'b',
        username: 'coco',
        email: 'coco@test.com',
        password: 'cc123',
    },
]

export function signin(username, password) {
    return new Promise((resolve, reject) => {
        const foundUser = users.find(
            (user) => user.username === username && user.password === password
        )

        setTimeout(() => {
            if (foundUser) {
                resolve(foundUser)
            } else {
                reject('Email or password is invalid')
            }
        }, 3000)
    })
}
