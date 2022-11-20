
export type Gear = {
    id: string,
    picture: string,
    company: string,
    description: string,
    currentUserEmail: string,
    checkoutDate: number,
    returnDate: string,
    name: string,
    price: string
}

export type CartGear = {
    gear: Gear
    numberOfWeeks: number
}

export type User = {
    email: string,
    name: string
}