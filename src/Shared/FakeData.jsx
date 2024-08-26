import {faker} from '@faker-js/faker';

function createRandomCarList() {
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY5kzH1m0CaDyiKk7MXJ0bKewrt3JxH3sIg&s',
        miles:1000,
        gearType:'Automatic',
        price:faker.finance.amount({min:4000, max:20000})
    };
}

const carList = faker.helpers.multiple(createRandomCarList ,{
    count:7
});

export default {
    carList
}