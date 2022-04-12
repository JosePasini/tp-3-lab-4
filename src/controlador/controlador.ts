import { Request, Response } from 'express';
import { parse } from 'pg-protocol';
import { cxMysql } from "../mysqldb";

export const getArticulos = (req: Request, res: Response) => new Promise((resolve, reject) => {
    cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err)
        }
        console.log("MySQL Connection: " + connection.threadId)
        connection.query("SELECT * FROM articulo LIMIT 10", (err, results) => {
            if (err) console.error(err); 
            res.send(results)
        })
    })
})

export const getArticulosByID = (req: Request, res: Response) => new Promise((resolve, reject) => {
    const idParam = parseInt(req.params.idParam)
    cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err)
        }
        console.log("MySQL Connection: " + connection.threadId)
        connection.query("SELECT * FROM articulo WHERE id = ?", idParam ,(err, results) => {
            if (err) console.error(err); 
            res.send(results)
        })
    })
})

export const addArticulo = (req: Request, res: Response) => {
    const { nombre_articulo, precio_articulo } = req.body;
    var values = [nombre_articulo, precio_articulo]
    cxMysql.getConnection((err, connection) => {
        if (err)
        { console.error(err);
        res.send(err)
        return
        } else {
            let sql:string = "INSERT INTO articulo(nombre_articulo, precio_articulo) VALUES (?,?)"
            connection.query(sql, values, (err, _) => {
                if (err) console.error(err);
                res.json({message: "Articulo agregado con éxito."})
            })
        }
    })
}

export const updateArticulo = (req: Request, res: Response) => {
    const { nombre_articulo, precio_articulo, id } = req.body;
    var values = [nombre_articulo, precio_articulo, id]
    cxMysql.getConnection((err, connection) => {
        if (err)
        { console.error(err);
        res.send(err)
        return
        } else {
            let sql:string = "UPDATE articulo SET nombre_articulo = ?, precio_articulo = ? WHERE id = ?"
            connection.query(sql, values, (err, _) => {
                if (err) console.error(err);
                res.json({message: "Articulo updateado con éxito."})
            })
        }
    })
}

export const deleteArticulo = (req: Request, res: Response) => {
    const idParam = parseInt(req.params.idParam)
    cxMysql.getConnection((err, connection) => {
        if (err)
        { console.error(err);
        res.send(err)
        return
        } else {
            let sql:string = "DELETE FROM articulo WHERE id = ?"
            connection.query(sql, [idParam], (err, _) => {
                if (err) console.error(err);
                res.json({message: "Articulo deleteado con éxito."})
            })
        }
    })
}