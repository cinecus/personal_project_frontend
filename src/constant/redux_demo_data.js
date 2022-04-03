export const products = [
    {
        id: '1',
        title: 'ItemA',
        price: 890,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622511/redux-cart/paul-gaudriault-cwy9yVBBPxg-unsplash_nsalul.jpg',
    },
    {
        id: '2',
        title: 'ItemB',
        price: 1400,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622498/redux-cart/andrew-draper-lFnMKEZT4zk-unsplash_wbqark.jpg',
    },
    {
        id: '3',
        title: 'ItemC',
        price: 1000,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622433/redux-cart/julius-drost-dS-q7-zkD9c-unsplash_lua1oj.jpg',
    },
    {
        id: '4',
        title: 'ItemD',
        price: 1500,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622428/redux-cart/theregisti-HSXIp58yPyI-unsplash_qqcd87.jpg',
    },
    {
        id: '5',
        title: 'ItemE',
        price: 590,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622427/redux-cart/jakob-owens-esbfaHABh7Y-unsplash_zmddie.jpg',
    },
    {
        id: '6',
        title: 'ItemF',
        price: 440,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622427/redux-cart/nordwood-themes-F3Dde_9thd8-unsplash_cnigmw.jpg',
    },
    {
        id: '7',
        title: 'ItemG',
        price: 1200,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622426/redux-cart/alexander-andrews-soLEw77Napo-unsplash_xnglgt.jpg',
    },
    {
        id: '8',
        title: 'ItemH',
        price: 1800,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622426/redux-cart/yoann-siloine-_T4w3JDm6ug-unsplash_n6qstp.jpg',
    },
    {
        id: '9',
        title: 'ItemI',
        price: 1600,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622426/redux-cart/ethan-hoover-vasU4-TlC5I-unsplash_h1rgvd.jpg',
    },
    {
        id: '10',
        title: 'ItemJ',
        price: 1400,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622426/redux-cart/william-thomas-ny6tO4ItOEY-unsplash_umhzhb.jpg',
    },
    {
        id: '11',
        title: 'ItemK',
        price: 1400,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622425/redux-cart/graham-mansfield-wp9ggFHgsAI-unsplash_mhbitt.jpg',
    },
    {
        id: '12',
        title: 'ItemL',
        price: 1400,
        image: 'http://res.cloudinary.com/cinecus/image/upload/v1647622424/redux-cart/olena-sergienko-9-uSCnBaVGU-unsplash_xonf4s.jpg',
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

//MOCK UP API
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
