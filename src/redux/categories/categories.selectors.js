import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectSections = createSelector(
  [selectCategories],
  (categories) => categories.sections
);
