import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Joseph' },
        { id: 2, name: 'Karen' },
        { id: 3, name: 'Andre' }
    ]
    return response.json(users)
}