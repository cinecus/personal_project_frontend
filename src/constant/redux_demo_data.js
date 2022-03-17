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

export function signin(email, password) {
    return new Promise((resolve, reject) => {
        const foundUser = users.find(
            (user) => user.email === email && user.password === password
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
