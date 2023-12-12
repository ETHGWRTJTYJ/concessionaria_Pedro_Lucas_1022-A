//criando o servidor com o festify
import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
//criando database
const database = new DatabaseMemory()
//servidor
const server = fastify()

server.get('/', (request) => {
    const search = request.query.search
    console.log(search)
    const conce = database.list(search)
    
    return conces
})

//cadastrar uma moto
server.post('/conces', (request, reply) => {
    const {marca, modelo, preco} = request.body
    database.create({
        marca: marca,
        modelo: modelo,
        preco: preco,
    })
    return reply.status(201).send()
})
//ver as fotos da moto
server.get('/conces', () => {
    const conces = database.list()
    console.log(conces)
    return conces
})
//atualizar fotos da moto
server.put('/conce/:id', (request, reply) => {
    const conceid = request.params.id
    const {marca, modelo, preco} = request.body
    const conce = database.update(conceid, {
        marca: marca,
        modelo: modelo,
        preco: preco
    })
    return reply.status(204).send()
})
//delete
server.delete('/conces/:id', () => {
    return "atualizar"
})
server.listen({
    port: 3333,
})