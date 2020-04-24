import express, { Request, Response, NextFunction } from 'express'
import { SampleController } from '../controller/sampleController';

interface SetRequestPrams {
  ["id"]: string
}

const router = express.Router()

const smpleCtl = SampleController.getInstance()
router.get('/', (req, res, next) => smpleCtl.getResponse1(req, res, next))
router.get('/:id(\\d+)', (req, res, next) => smpleCtl.getResponse2(req, res, next))
router.get('/:id(\\d+)/all', (req: Request<{ ["id"]: string }>, res, next) => smpleCtl.getResponse3(req, res, next))
router.post('/:id(\\d+)/post', (req: Request<{ ["id"]: string }>, res, next) => smpleCtl.getResponse3(req, res, next))

export default router
