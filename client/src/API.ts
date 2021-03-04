import axios, { AxiosResponse } from 'axios';

const baseURL: string = 'http://localhost:4000';

export const signUp = async (formData: Omit<IUser, '_id'>): Promise<AxiosResponse<ApiUserDataType>> => {
  try {
    const user: Omit<IUser, '_id'> = {
      userName: formData.userName,
      email: formData.email,
      password: formData.password,
    };
    const registeredUser: AxiosResponse<ApiUserDataType> = await axios.post(`${baseURL}/signUp`, user);
    return registeredUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const signIn = async (formData: Pick<IUser, 'email'|'password'>): Promise<AxiosResponse<ApiUserDataType>> => {
  try {
    const user: Pick<IUser, 'email'|'password'> = {
      email: formData.email,
      password: formData.password,
    };
    const loginUser: AxiosResponse<ApiUserDataType> = await axios.post(`${baseURL}/signIn`, user);
    return loginUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await axios.get(`${baseURL}/signOut`);
  } catch (error) {
    throw new Error(error);
  }
}

export const getMemos = async (): Promise<AxiosResponse<ApiMemoDataType>> => {
  try {
    const memos: AxiosResponse<ApiMemoDataType> = await axios.get(`${baseURL}/memos`);
    return memos;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMemo = async (_id: string): Promise<AxiosResponse<ApiMemoDataType>> => {
  try {
    const memo: AxiosResponse<ApiMemoDataType> = await axios.get(`${baseURL}/memo/${_id}`);
    return memo;
  } catch (error) {
    throw new Error(error)
  }
};

export const addMemo = async (formData: Omit<IMemo, '_id'>): Promise<AxiosResponse<ApiMemoDataType>> => {
  try {
    const memo: Omit<IMemo, '_id'> = {
      title: formData.title,
      description: formData.description,
      pinned: formData.pinned,
    };

    const response: AxiosResponse<ApiMemoDataType> = await axios.post(`${baseURL}/add-memo`, memo);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateMemo = async (_id: string, formData: Omit<IMemo, '_id'>): Promise<AxiosResponse<ApiMemoDataType>> => {
  try {
    const memo: IMemo = {
      _id: _id,
      title: formData.title,
      description: formData.description,
      pinned: formData.pinned,
    };
    const updatedMemo: AxiosResponse<ApiMemoDataType> = await axios.put(`${baseURL}/edit-memo/${_id}`,memo);
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





