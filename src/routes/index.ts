import { Router } from 'express';
import { getMemos, addMemo, updateMemo, deleteMemo, } from '../controllers/memos/memoController';

const router: Router = Router();

router.get('/memos', getMemos);

router.post('/add-memo', addMemo);

router.put('/edit-memo', updateMemo);

router.delete('/delete-memo', deleteMemo);

export default router;