
export const START_FETCHING_CARD = 'START_FETCHING_CARD';
export const FINISH_FETCHING_CARD = 'FINISH_FETCHING_CARD';

const fetchCardIfNeeded = () => (dispatch, getState) => {
  let state = getState().page;
  if (state.cardData === undefined || state.cardData.slug !== state.cardSlug) return dispatch(fetchCard());
}

const fetchCard = () => (dispatch, getState) => {
  
  dispatch(startFetcingCard());
  let url = apiPath() + '/card' + getState().page.cardSlug;
  return fetch(url)
    .then(res => res.json())
    .then(json => dispatch(finishFetchingCard(json)));
};

const startFetchingCard = () => { 
  type: START_FETCHING_CARD 
};

const finishFetchingCard = json => {
  return {
    type: FINISH_FETCHING_CARD,
    cardData: json
  };
};

const apiPath = () => 'https://localhost:40001/api/v1';

export default fetchCardIfNeeded;