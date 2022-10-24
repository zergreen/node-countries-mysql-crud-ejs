var config = {
  database: {
    // host:	  'localhost', 		// database host
    host: "127.0.0.1", // database host
    user: "root", // your database username
    password: "admin", // your database password
    port: 3306, // default MySQL port
    db: "test_db", // your database name
  },
  server: {
    host: "127.0.0.1", // the host for the server
    port: "3000", // the port for the server
  },
};

module.exports = config;
