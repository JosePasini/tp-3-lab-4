class Vehiculo {
    private patente: string;
    private marca: string;
    private modelo: string;

    constructor(patente: string, marca: string, modelo: string) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }

    getPatente(){
        return this.patente;
    }

    setPatente(patente:string){
        this.patente = patente;
    }

    getMarca(){
        return this.marca;
    }

    setMarca(marca:string){
        this.marca = marca;
    }

    getModelo(){
        return this.modelo;
    }

    setModelo(modelo:string){
        this.modelo = modelo;
    }

}