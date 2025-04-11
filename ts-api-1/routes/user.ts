import express, {Request, Response} from "express"

import User from "../schemas/user"


export default (app: express.Application) => {

  app.get('/user', async (req: Request, res: Response) => {
    const users = await User.find()

    res.json(users)
  })

  app.get('/user/:id', async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id)
    res.json(user)
  })

  app.post('/user', async (req: Request, res: Response) => {
    const newUser = new User({
      ...req.body
    })
    const savedUser = await newUser.save()

    res.json(savedUser)
  })
}
