import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: {},
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    },
  },
});

export const selectCards = (state) => state.cards.cards;
export const selectCardById = (state, cardId) => state.cards.cards[cardId];

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
