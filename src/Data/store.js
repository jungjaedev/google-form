import { configureStore } from '@reduxjs/toolkit';

import manager from './manager';
import question from './question';

export const store = configureStore({
  reducer: {
    manager: manager,
    question: question,
  },
});
