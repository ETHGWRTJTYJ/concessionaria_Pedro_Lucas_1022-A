import {randomUUID} from "node:crypto"
export class DatabaseMemory{
    #conces = new Map()
    list(){
        return Array.from(this.#conces.values())
    }
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

