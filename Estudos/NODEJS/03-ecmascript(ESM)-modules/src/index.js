//import connectToDatabase from "./utils/database.mjs";

//import * as database from "./utils/database.mjs";

//database.connectToDatabase("myDatabase");
//database.disconnectFromDatabase();

import { connectToDatabase, disconnectFromDatabase, databaseType } from "./utils/database.mjs";

import { key, getDataFromApi} from "./utils/api.mjs";

connectToDatabase("myDatabase");
disconnectFromDatabase();

console.log(databaseType.userType);
console.log(databaseType.typeData);

getDataFromApi();
console.log(key.value);