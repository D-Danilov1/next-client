import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helpers'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthResponse, IAuthUser } from './user.interface'

export const login = createAsyncThunk<IAuthResponse, IAuthUser>(
  'login',
  async ({ email, password }, thunkAPI) => {
    try {
      return await AuthService.login(email, password)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const registration = createAsyncThunk<IAuthResponse, IAuthUser>(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const logout = createAsyncThunk('logout', async () => {
  await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>('refresh', async (_, thunkAPI) => {
  try {
    return await AuthService.getNewTokens()
  } catch (error) {
    if (errorCatch(error) === 'jwt expired') {
      thunkAPI.dispatch(logout())
    }
    return thunkAPI.rejectWithValue(error)
  }
})
