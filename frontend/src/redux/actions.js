
export const START_FETCHING_CARD = 'START_FETCHING_CARD';
export const FINISH_FETCHING_CARD = 'FINISH_FETCHING_CARD';

const apiPath = () => 'http://localhost:40001/api/v1';

const startFetchingCard = () => {
  return {
    type: START_FETCHING_CARD
  };
};

const finishFetchingCard = json => {
  return {
    type: FINISH_FETCHING_CARD,
    cardData: json
  };
};

const fetchCard = () => (dispatch, getState) => {
  dispatch(startFetchingCard());
  let url = apiPath() + '/card/' + getState().page.cardSlug;
  return fetch(url)
    .then(res => res.json())
    .then(json => dispatch(finishFetchingCard(json)));
};

export const fetchCardIfNeeded = () => { 
  return (dispatch, getState) => {
    let state = getState().page;
    if (state.cardData === undefined || state.cardData.slug !== state.cardSlug)
      return dispatch(fetchCard());
  };
};