import { Router } from 'express';
import { getMemos, getMemo, addMemo, updateMemo, deleteMemo, } from '../controllers/memos/memoController';

const router: Router = Router();

router.get('/memos', getMemos);

router.get('/memo/:id', getMemo);

router.post('/add-memo', addMemo);

router.put('/edit-memo/:id', updateMemo);

router.delete('/delete-memo/:id', deleteMemo);

export default router;