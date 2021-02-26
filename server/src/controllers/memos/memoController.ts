import { Response, Request } from 'express';
import { IMemo } from '../../types/memo';
import Memo from '../../models/memo';

const getMemos = async (req: Request, res: Response): Promise<void> => {
  try {
    const memos: IMemo[] = await Memo.find();
    res.status(200).json({ memos });
  } catch (error) {
    throw error;
  }
};

const getMemo = async (req: Request, res: Response): Promise<void> => {
  try {
    const memo: IMemo | null = await Memo.findById(req.params.id);
    res.status(200).json({ memo });
  } catch (error) {
    throw error;
  }
};

const addMemo = async (req: Request, res: Response):  Promise<void> => {
  try {
    const body = req.body as Pick<IMemo, 'title' | 'description' | 'pinned'>;

    const memo: IMemo = new Memo({
      title: body.title,
      description: body.description,
      pinned: body.pinned,
    });

    await memo.save();

    res.status(201).json({ message: 'メモを追加しました。' });
  } catch (error) {
    throw error;
  }
};

const updateMemo = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log();
    const { params: { id }, body, } = req;

    await Memo.findByIdAndUpdate({ _id: id}, body);

    res.status(200).json({ message: 'メモを更新しました。' });
  } catch (error) {
    throw error;
  }
};

const deleteMemo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedMemo: IMemo | null = await Memo.findByIdAndRemove(req.params.id);
    const allMemos: IMemo[] = await Memo.find();

    res.status(200).json({ message: 'メモを削除しました', memo: deletedMemo, memos: allMemos });
  } catch (error) {
    throw error;
  }
};

export { getMemos, getMemo, addMemo, updateMemo, deleteMemo };