"use strict";
class Detalle {
    constructor(kmSalida, kmRegreso, horaSalida, horaRegreso, minutoSalida, minutoRegreso, hojaRuta) {
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;
        this.hojaRuta = hojaRuta;
    }
    getKmSalida() {
        return this.kmSalida;
    }
    getKmRegreso() {
        return this.kmRegreso;
    }
    getHoraSalida() {
        return this.horaSalida;
    }
    getHoraRegreso() {
        return this.horaRegreso;
    }
    getMinutoSalida() {
        return this.minutoSalida;
    }
    getMinutoRegreso() {
        return this.minutoRegreso;
    }
    getHojaRuta() {
        return this.hojaRuta;
    }
    setKmSalida(kmSalida) {
        this.kmSalida = kmSalida;
    }
    setKmRegreso(kmRegreso) {
        this.kmRegreso = kmRegreso;
    }
    setHoraSalida(kmRegreso) {
        this.kmRegreso = kmRegreso;
    }
    setHoraRegreso(horaRegreso) {
        this.horaRegreso = horaRegreso;
    }
    setMinutoSalida(horaSalida) {
        this.horaSalida = horaSalida;
    }
    setMinutoRegreso(minutoRegreso) {
        this.minutoRegreso = minutoRegreso;
    }
    setHojaRuta(hojaRuta) {
        this.hojaRuta = hojaRuta;
    }
}
