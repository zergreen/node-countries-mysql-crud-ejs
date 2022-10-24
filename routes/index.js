var express = require("express");
var app = express();

app.get("/", function (req, res) {
  console.log("i come from index");
  // render to views/index.ejs template file
  var title = "Yaya Node Countries Light Application";
  res.render("index", {
    title: title,
  });
});

app.get("/testlistallcountry", function (req, res, next) {
  console.log("I come from my config all country");
  req.getConnection(function (error, conn) {
    if (error) {
      console.log("refuse to connection AT : " + error);
    } else {
      console.log("Connect to DATABASE SUCCESS!");
    }
    conn.query("SELECT * from node_countries", function (err, rows, fields) {
      //if(err) throw err
      if (err) {
        console.log(err);
        // req.flash("error", err);
        return res.sendFile("error.html");
      } else {
        // render to views/country/list.ejs template file

        // res.render("country/list", {
        //   title: "All Countries",
        //   data: rows,
        // });
        return res.status(201).send({ response: rows });
      }
    });
  });
});
/**
 * We assign app object to module.exports
 *
 * module.exports exposes the app object as a module
 *
 * module.exports should be used to return the object
 * when this file is required in another module like app.js
 */
module.exports = app;
