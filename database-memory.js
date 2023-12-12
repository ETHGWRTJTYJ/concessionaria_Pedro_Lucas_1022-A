import {randomUUID} from "node:crypto"
export class DatabaseMemory{
    #conces = new Map()
    //lista de motos da concessionaria
    list(search){
        return Array.from(this.#conces.entries()).map((conceArray) => {
            //posição 1
            const id = conceArray[0]
            //posição 2
            const data = conceArray[1]
            return{
                id,
                ...data,
            }
        })
    .filter(conce => {
        if (search) {
            return conce.marca.includes(search)
        }
        return true
    })
}
//criar nova moto
    create(conce){
        const conceid = randomUUID()
        this.#conces.set(conceid, conce)
    }
    update(id, conce){
        this.#conces.set(id, conce)
    }
    update(id, conce){
        this.#conces.push(id, conce)
    }
    delete(id){
        this.#conces.delete(id)
    }
}