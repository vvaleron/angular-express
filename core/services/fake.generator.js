const faker = require('faker');
const path = require('path');
const resolve = path.resolve;
faker.locale = "uk";

const jsonfile = require('jsonfile');

const service = {
    folder_path: 'fake_data',
    generate,
    writeToFolder
};

function generate (count) {
    const inerrations = count || 30;
    const data = {
        users: [],
        products: [],
        transactions: [],
        personalInfo: []
    };

    for (var i = 0; i < inerrations; i++) {
        data.users.push(user());
        data.products.push(product());
        data.transactions.push(transaction());
        data.personalInfo.push(personalInfo());
    }

    return data;
}

function write (fileName, obj) {
    const path = resolve(__dirname, '../../', service.folder_path, fileName);
    jsonfile.writeFile(path, obj, (err) => console.error(err));
}

function writeToFolder () {
    const data = generate();

    for (var key in data) {
        write(`${key}.json`, data[key]);
    }
}

function user () {
    return {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        job: {
            title: faker.name.jobTitle(),
            area: faker.name.jobArea(),
            type: faker.name.jobType(),
            description: faker.name.jobDescriptor()

        },
        email: faker.internet.email('Valeriy'),
        city: faker.address.city(),
        country: faker.address.country(),
        zipCode: faker.address.zipCode("091##"),
        address: faker.address.streetAddress(true),
        born: faker.date.past(),
        phone: faker.phone.phoneNumber('097 ### ## ##'),
        userAgent: faker.internet.userAgent()
    }
}

function product () {
    return {
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        symbol: faker.finance.currencySymbol(),
        description: faker.lorem.paragraph(4),
        createdDate: faker.date.recent(2),
        tillDate: faker.date.future(0.5),
        owner: faker.helpers.createCard()
    }
}

function transaction () {
    return faker.helpers.createTransaction()
}

function personalInfo () {
    return faker.helpers.createCard()
}


module.exports = service;
