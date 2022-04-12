class HojaRuta{
    private fecha: Date = new Date();
    private numero: number;
    private vehiculo: Vehiculo;
    
    constructor(fecha: Date, numero: number, vehiculo: Vehiculo) {
        this.fecha = new Date();
        this.numero = numero;
        this.vehiculo = vehiculo;
    }

    getFecha(){
        return this.fecha;
    }

    setFecha(fecha:Date){
        this.fecha = fecha;
    }

    getNumero(){
        return this.numero;
    }

    setNumero(numero:number){
        this.numero = numero;
    }

    getVehiculo(){
        return this.vehiculo;
    }

    setVehiculo(vehiculo:Vehiculo){
        this.vehiculo = vehiculo;
    }

    salida(kmSalida:number, kmRegreso:number):number{
        return kmRegreso-kmSalida;
    }


}