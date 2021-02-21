import axios, { AxiosResponse } from 'axios';

const baseURL: string = 'http://localhost:4000';

export const getMemos = async (): Promise<AxiosResponse<ApiMemoDataType>> => {
  try {
    const memos: AxiosResponse<ApiMemoDataType> = await axios.get(`${baseURL}/memos`);
    return memos;
  } catch (error) {
    throw new Error(error);
  }
};

export const addmemo = async (formData: IMemo): Promise<AxiosResponse<ApiMemoDataType>> => {
  try {
    const memo: Omit<IMemo, '_id'> = {
      title: formData.title,
      description: formData.description,
      pinned: formData.pinned,
    };
    const saveMemo: AxiosResponse<ApiMemoDataType> = await axios.post(`${baseURL}/add-memo`, memo);
    return saveMemo;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateMemo = async (formData: IMemo): Promise<AxiosResponse<ApiMemoDataType>> => {
  try {
    const memo: IMemo = {
      _id: formData._id,
      title: formData.title,
      description: formData.description,
      pinned: formData.pinned,
    };
    const updatedMemo: AxiosResponse<ApiMemoDataType> = await axios.put(`${baseURL}/edit-memo/${memo._id}`);
    return updatedMemo;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteMemo = async (_id: string): Promise<AxiosResponse<ApiMemoDataType>> => {
  try {
    const deletedMemo: AxiosResponse<ApiMemoDataType> = await axios.delete(`${baseURL}/delete-memo/${_id}`);
    return deletedMemo;
  } catch (error) {
    throw new Error(error);
  }
};





