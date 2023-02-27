
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', sender: 'User', message: 'Hello!' },
  { id: '2', sender: 'GPT', message: 'How ya!' }
]

const publishedPromptSlice = createSlice({
  name: 'publishedPrompts',
  initialState,
  reducers: {}
});

export const {} = publishedPromptSlice.actions

export default publishedPromptSlice.reducer