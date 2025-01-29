import { createSlice } from '@reduxjs/toolkit';

//topic {id: '123456', name: 'name of topic', icon: 'icon url', quizIds: ['123456', '123456']}

const initialState = {
  topics: {},
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id } = action.payload;
      state.topics[id] = action.payload;
      state.topics[id].quizIds = [];
    },
  },
});

//selectors
export const selectTopics = (state) => state.topics.topics;
export const selectTopicById = (state, topicId) => state.topics.topics[topicId];

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
