import createDataContext from './createDataContext'
import axios from 'axios'

const initialState = {
  selectLeague: null,
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
    case 'selectLeague':
      return { ...state, ...action.payload }
    case 'getting initial league':
      return { ...state, selectedLeagueToplist: action.payload.initialData, tournament: action.payload.metaData.tournament }
    case 'GETLIVEDATA':
      return { ...state,  stages: action.payload.initialData}
    default:
      return state;
  }
}

function getConfig (urlParams, data ) {
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

// Global Functions
const selectLeague = (dispatch) => {
  return (selectedLeague) => {
    dispatch({ type: 'selectLeague', payload: selectedLeague })
    const data = (getData({tournamentId:selectedLeague.tournamentId}))
    axios(getConfig('livestandings/soccer/table',data))
      .then(function (response) {
        console.log((response.data));
        dispatch({ type: 'getting initial league', payload: response.data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

const getLiveData = (dispatch) => {
  return () => {
    const data = getData({coverageId: "ab1450da-9d77-479c-8ab7-f46b2533b2dc"}, {sportId:1, betCode:true})
    axios(getConfig('livescore/matchlist',data))
    .then(function (response) {
      dispatch({type: 'GETLIVEDATA', payload: response.data})
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
}


export const { Provider, Context } = createDataContext(
  leagueReducer,
  { selectLeague, getLiveData},
  { ...initialState }
)