import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: {},
};

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    },
  },
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const selectQuizById = (state, quizId) => state.quizzes.quizzes[quizId];

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
