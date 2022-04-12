"use strict";
class HojaRuta {
    constructor(fecha, numero, vehiculo) {
        this.fecha = new Date();
        this.fecha = new Date();
        this.numero = numero;
        this.vehiculo = vehiculo;
    }
    getFecha() {
        return this.fecha;
    }
    setFecha(fecha) {
        this.fecha = fecha;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getVehiculo() {
        return this.vehiculo;
    }
    setVehiculo(vehiculo) {
        this.vehiculo = vehiculo;
    }
    salida(kmSalida, kmRegreso) {
        return kmRegreso - kmSalida;
    }
}
