const TITLE_CHANGER = "TITLE_CHANGER/CHANGE";

export const titleChanger = (title) => {

  return({
    type: TITLE_CHANGER,
    title,
  });
};

const initialState = {
  title: 'title',
}

const changer = (state = initialState, action) => {
  switch (action.type) {
    case TITLE_CHANGER:
      return { ...state, title: action.title };
    default:
      return state;
  }
};

export default changer;
