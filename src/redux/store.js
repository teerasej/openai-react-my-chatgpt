
import { configureStore } from '@reduxjs/toolkit'
import publishPromptReducer from './features/publishedPromptSlice'

export default configureStore({
  reducer: {
    publishPrompts: publishPromptReducer
  }
})