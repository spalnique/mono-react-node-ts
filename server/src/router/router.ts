import { Router } from 'express';

const router = Router();

router.use('/status', async (_req, res) => res.json('I am Groot!'));

export default router;
