class Bicicleta {
    static bicicletas = [];
    static idActual = 1;

    constructor(id, color, modelo, ubicacion) {
        this.id = id;
        this.color = color;
        this.modelo = modelo;
        this.ubicacion = ubicacion;
    }

    static create(color, modelo, ubicacion) {
        const nuevaBici = new Bicicleta(this.idActual++, color, modelo, ubicacion);
        this.bicicletas.push(nuevaBici);
        return nuevaBici;
    }

    static findAll() {
        return this.bicicletas;
    }

    static findById(id) {
        return this.bicicletas.find(bici => bici.id === id);
    }

    static update(id, datosActualizados) {
        const bici = this.findById(id);
        if (bici) {
            if (datosActualizados.color) bici.color = datosActualizados.color;
            if (datosActualizados.modelo) bici.modelo = datosActualizados.modelo;
            if (datosActualizados.ubicacion) bici.ubicacion = datosActualizados.ubicacion;
        }
        return bici;
    }

    static delete(id) {
        const indice = this.bicicletas.findIndex(bici => bici.id === id);
        if (indice !== -1) {
            this.bicicletas.splice(indice, 1);
            return true;
        }
        return false;
    }
}

module.exports = Bicicleta;