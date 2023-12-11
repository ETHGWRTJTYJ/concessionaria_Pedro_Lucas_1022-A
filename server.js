import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const database = new DatabaseMemory()
const server = fastify()

server.get('/', () => {
    return 'Rota padrão'
})

//cadastrar uma moto
server.post('/conce', (request, reply) => {
    const {marca, modelo, preco} = request.body
    database.create({
        marca: marca,
        modelo: modelo,
        preco: preco,
    })
    return reply.status(201).send()
})
//ver as fotos da moto
server.get('/conce', () => {
    return 'fotos'
})
//atualizar fotos da moto
server.put('/conce/:id', () => {
    return "atualizar"
})
server.delete('/conces/:id', () => {
    return "atualizar"
})
server.listen({
    port: 3333,
})