import createDataContext from './createDataContext'
import axios from 'axios'

const leagueCONSTANTS = {
  SET_LEAGUE: 'SET_SELECTED_LEAGUE',
  GET_SELECTED_LEAGUE_TOP_LIST: "GET_SELECTED_LEAGUETOPLIST",
  GET_ALL_MATCHLIST: "GET_ALL_MATCHLIST",
  LOADING: "LOADING",
  ERROR: "ERROR"
}

const initialState = {
  loading: false,
  error: false,
  id: 0,
  leagueName: "Süper Lig",
  img: 48,
  tournamentId: 1,
  selectedLeagueToplist: null,
  tournament: null,
  stages: null
}

const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case leagueCONSTANTS.SET_LEAGUE:
      return { ...state, ...action.payload }
    case leagueCONSTANTS.GET_SELECTED_LEAGUE_TOP_LIST:
      return { ...state, selectedLeagueToplist: action.payload.initialData, tournament: action.payload.metaData.tournament, loading: false }
    case leagueCONSTANTS.GET_ALL_MATCHLIST:
      return { ...state, stages: action.payload, loading: false }
    case leagueCONSTANTS.LOADING:
      return { ...state, loading: true }
    case leagueCONSTANTS.ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}

function getConfig(urlParams, data) {
  const config = {
    method: 'post',
    url: `https://brdg-d2d66d21-7796-4d6c-a6d5-7fee80f9d915.azureedge.net/${urlParams}`,
    headers: {
      'authority': 'brdg-d2d66d21-7796-4d6c-a6d5-7fee80f9d915.azureedge.net',
      'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36',
      'content-type': 'application/json',
      'accept': '*/*',
      'origin': 'https://www.ntvspor.net',
      'accept-language': 'en-US,en;q=0.9,tr;q=0.8'
    },
    data: data
  };
  return config
}

function getData(params, optionsParams) {
  const data = {
    ...params,
    options: {
      lang: "tr-TR",
      origin: "ntvspor.net",
      forceFullData: true,
      timeZone: 3,
      ...optionsParams
    }
  }

  return data;
}

// Global Functions //
const selectLeague = (dispatch) => {
  return (selectedLeague) => {
    dispatch({ type: leagueCONSTANTS.SET_LEAGUE, payload: selectedLeague })
    dispatch({ type: leagueCONSTANTS.LOADING })
    // Getting Selected League TopList => (Super League's one is Besiktas now)
    axios(getConfig('livestandings/soccer/table', getData({ tournamentId: selectedLeague.tournamentId })))
      .then(function (response) {
        // console.log((response.data));
        dispatch({ type: leagueCONSTANTS.GET_SELECTED_LEAGUE_TOP_LIST, payload: response.data })
      })
      .catch(function (error) {
        dispatch({ type: leagueCONSTANTS.ERROR, payload: error })
        console.log(error);
      });
  }
}

const getMatchList = (dispatch) => {
  return (day) => {
    dispatch({ type: leagueCONSTANTS.LOADING })
    axios(getConfig('livescore/matchlist', getData({ coverageId: "ab1450da-9d77-479c-8ab7-f46b2533b2dc" }, { sportId: 1, betCode: true, day: day })))
      .then(function (response) {
        // console.log(response.data);
        dispatch({ type: leagueCONSTANTS.GET_ALL_MATCHLIST, payload: response.data.initialData })
      })
      .catch(function (error) {
        dispatch({ type: leagueCONSTANTS.ERROR, payload: error })
        console.log(error);
      });
  }
}

export const { Provider, Context } = createDataContext(
  leagueReducer,
  { selectLeague, getMatchList },
  { ...initialState }
)