/* eslint-disable no-console */
  import * as bcryptjs from "bcryptjs";
  import app from './app'
  import {createConnection} from "typeorm";
  import {Users} from "./entity/User";
  
  createConnection().then(async connection => {
    app.listen(process.env.PORT);
    
    // // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     first_name: "Timber",
    //     pass: await bcryptjs.hash('password', 10),
    //     lastName: "Saw",
    //     age: 27
    // }));
    // await connection.manager.save(connection.manager.create(User, {
    //     first_name: "Phantom",
    //     pass: await bcryptjs.hash('password', 10),
    //     lastName: "Assassin",
    //     age: 24
    // }));
    
    console.log(`Express server has started on port ${process.env.PORT}. Open http://localhost:${process.env.PORT}/users to see results`);
    
}).catch(error => console.log(error));
