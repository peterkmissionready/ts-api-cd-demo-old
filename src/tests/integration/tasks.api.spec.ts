import { Server } from 'http'
import app from '../../app'
import request from 'supertest'

describe('Tasks API', () => {
    test('it should return all tasks', async ()=>{
        const expected =[{
            id: 1,
            name: 'Mission 01',
            description: 'Chatbot',
            isCompleted: false,

        },
    ]

    const res = await request(app).get('/api/tasks')

    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expected)
    })
})

