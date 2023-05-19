import { getAllTasks } from '../../controllers/taskController'
import { getMockReq, getMockRes } from '@jest-mock/express';

describe('getAllTasks',() => {
    test('should send all tasks via res', () => {
        //Arrage
        const reqMock = getMockReq();
        const {res} = getMockRes();
        getAllTasks(reqMock, res);


        expect(res.status).toHaveBeenCalledTimes(1)
    })
})

