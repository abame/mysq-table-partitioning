import mysql, { Connection, MysqlError, OkPacket } from "mysql";
import { faker } from '@faker-js/faker';

const Log = {
    reset: "\x1b[0m",
    red: "\x1b[41m",
    green: "\x1b[42m"
};

async function insertData(connection: Connection, values: (string|number|Date)[][]){
    const query = `INSERT INTO customers (company,last_name,first_name,job_title,fax_number,address,city,state_province,zip_postal_code,country_region,store_id,total_orders,registered_at) VALUES ?`;

    const result = connection.query(query, [values]);

    result.on('result', (data: OkPacket) => {
        console.log(`${Log.green}%s${Log.reset}`, data.message);
    })
    result.on("error", (error: MysqlError) => {
        console.error(`${Log.red}%s${Log.reset}`, error.message);
    })
}

(async () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 6033,
        password: 'my_secret_password',
        database: 'demo'
    });


    //if we do more that 11 iterations the connection will timeout
    //in total, in one run, we add 10 x 20000 = 200000 records, before closing the connection
    for (let i = 0; i < 10; i++) {
        //if length more than 20000 the following error will be thrown ER_NET_PACKET_TOO_LARGE: Got a packet bigger than 'max_allowed_packet' bytes
        const values = Array.from({length: 20000}, (_, __) => [
            faker.company.name(),
            faker.name.lastName(),
            faker.name.firstName(),
            faker.name.jobTitle(),
            faker.phone.number(),
            faker.address.streetAddress(),
            faker.address.cityName(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.address.countryCode(),
            parseInt(faker.random.numeric(2)),
            parseInt(faker.random.numeric()),
            faker.date.between('2020-01-01T00:00:00.000Z', '2023-01-15:00:00.000Z')
        ]);
        await insertData(connection, values);
    }
    connection.end();
})();
