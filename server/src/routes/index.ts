import { Router } from 'express';
import { signUp, signIn, signOut } from '../controllers/users/userController';
import { getMemos, getMemo, addMemo, updateMemo, deleteMemo, } from '../controllers/memos/memoController';

const router: Router = Router();

router.post('/signUp', signUp);

router.post('/signIn', signIn);

router.get('/signOut', signOut);

router.post('/memos', getMemos);

router.get('/memo/:id', getMemo);

router.post('/add-memo', addMemo);

router.put('/edit-memo/:id', updateMemo);

router.delete('/delete-memo/:id', deleteMemo);

export default router;