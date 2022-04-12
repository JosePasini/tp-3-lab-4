"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArticulo = exports.updateArticulo = exports.addArticulo = exports.getArticulosByID = exports.getArticulos = void 0;
const mysqldb_1 = require("../mysqldb");
const getArticulos = (req, res) => new Promise((resolve, reject) => {
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
        }
        console.log("MySQL Connection: " + connection.threadId);
        connection.query("SELECT * FROM articulo LIMIT 10", (err, results) => {
            if (err)
                console.error(err);
            res.send(results);
        });
    });
});
exports.getArticulos = getArticulos;
const getArticulosByID = (req, res) => new Promise((resolve, reject) => {
    const idParam = parseInt(req.params.idParam);
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
        }
        console.log("MySQL Connection: " + connection.threadId);
        connection.query("SELECT * FROM articulo WHERE id = ?", idParam, (err, results) => {
            if (err)
                console.error(err);
            res.send(results);
        });
    });
});
exports.getArticulosByID = getArticulosByID;
const addArticulo = (req, res) => {
    const { nombre_articulo, precio_articulo } = req.body;
    var values = [nombre_articulo, precio_articulo];
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = "INSERT INTO articulo(nombre_articulo, precio_articulo) VALUES (?,?)";
            connection.query(sql, values, (err, _) => {
                if (err)
                    console.error(err);
                res.json({ message: "Articulo agregado con éxito." });
            });
        }
    });
};
exports.addArticulo = addArticulo;
const updateArticulo = (req, res) => {
    const { nombre_articulo, precio_articulo, id } = req.body;
    var values = [nombre_articulo, precio_articulo, id];
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = "UPDATE articulo SET nombre_articulo = ?, precio_articulo = ? WHERE id = ?";
            connection.query(sql, values, (err, _) => {
                if (err)
                    console.error(err);
                res.json({ message: "Articulo updateado con éxito." });
            });
        }
    });
};
exports.updateArticulo = updateArticulo;
const deleteArticulo = (req, res) => {
    const idParam = parseInt(req.params.idParam);
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = "DELETE FROM articulo WHERE id = ?";
            connection.query(sql, [idParam], (err, _) => {
                if (err)
                    console.error(err);
                res.json({ message: "Articulo deleteado con éxito." });
            });
        }
    });
};
exports.deleteArticulo = deleteArticulo;
