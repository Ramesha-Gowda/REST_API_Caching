/**
 * Setup the Database URL
 */

 // mongodb+srv://Ramesha:<password>@rameshacluster.r4adv.mongodb.net/?retryWrites=true&w=majority

const DB_USER = "Ramesha"
const DB_PASSWORD = "Ramesha123"
const DB_NAME = "acmetravel"
const CLUSTER_HOST = "rameshacluster.r4adv.mongodb.net"

// Setup the DB URI
exports.DB_URI= "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@"+CLUSTER_HOST+"/"+DB_NAME+"?retryWrites=true&w=majority"