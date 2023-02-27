
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import key from './openAPI'


const initialState = [
  { id: '1', sender: 'User', message: 'Hello!' },
  { id: '2', sender: 'GPT', message: 'How ya!' }
]

export const fetchOpenAI = createAsyncThunk(
  'user/fetchOpenAI',
  async (prompt) => {

    console.log('fetching openAI')

    const jsonPrompt = JSON.stringify({
      "model": "text-davinci-003",
      "prompt": `${prompt}\n\n>`,
      "temperature": 0.7,
      "max_tokens": 256,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0
    });

    console.log(jsonPrompt)

    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      jsonPrompt,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        }
      });


    return response.data.choices[0].text;
  }
);


const publishedPromptSlice = createSlice({
  name: 'publishedPrompts',
  initialState,
  reducers: {
    promptAdded(state, action) {
      state.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOpenAI.fulfilled, (state, action) => {
        console.log('succeeded');
        state.push({
          sender: 'GPT',
          message: action.payload
        })
      })
      .addCase(fetchOpenAI.rejected, (state, action) => {
        console.log('failed');
        console.error(action.error.message);
      });
  },
});

export const { promptAdded } = publishedPromptSlice.actions

export default publishedPromptSlice.reducer