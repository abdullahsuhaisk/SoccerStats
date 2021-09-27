import createDataContext from './createDataContext'
import axios from 'axios'

const contextName = "LeagueContext => "

const leagueCONSTANTS = {
  SET_LEAGUE: 'SET_SELECTED_LEAGUE',
  GET_SELECTED_LEAGUE_TOP_LIST: "GET_SELECTED_LEAGUETOPLIST",
  GET_ALL_MATCHLIST: "GET_ALL_MATCHLIST",
  LOADING: "LOADING",
  ERROR: "ERROR",
  GET_AVAIBLE_LEAGUES: 'GET_AVAIBLE_LEAGUES',
  GET_ALL_TOPLIST: 'GET_ALL_TOPLIST'
}

const initialState = {
  loading: false,
  initialized: false,
  error: false,
  allLeagues: [],
  selectedLeagueId: {},
  matchList: [],
  allTopList: []
}

const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case leagueCONSTANTS.SET_LEAGUE:
      return { ...state, selectedLeague: action.payload, selectedLeagueId:action.payload._id }
    case leagueCONSTANTS.GET_SELECTED_LEAGUE_TOP_LIST:
      return { ...state, selectedLeagueToplist: action.payload.initialData, tournament: action.payload.metaData.tournament, loading: false, error: false }
    case leagueCONSTANTS.GET_ALL_MATCHLIST:
      return { ...state, loading: false, error: false, matchList: action.payload }
    case leagueCONSTANTS.LOADING:
      return { ...state, loading: true }
    case leagueCONSTANTS.ERROR:
      return { ...state, loading: false, error: action.payload }
    case leagueCONSTANTS.GET_AVAIBLE_LEAGUES:
      return { ...state, allLeagues: action.payload, loading: false, initialized: true }
    case leagueCONSTANTS.GET_ALL_TOPLIST:
      return { ...state, allTopList: action.payload, loading: false, initialized: true }
    default:
      return state;
  }
}

// Global Functions //
const selectLeague = (dispatch) => {
  return (selectedLeague) => {
    dispatch({ type: leagueCONSTANTS.SET_LEAGUE, payload: selectedLeague })
    dispatch({ type: leagueCONSTANTS.LOADING })
    // Getting Selected League TopList => (Super League's one is Besiktas now)
  }
}
//

const getAllTopList = (dispatch) => {
  return () => {
    console.log(contextName, 'getAllTopList start')
    dispatch({ type: leagueCONSTANTS.LOADING })
    axios('https://soccerstatsrestapi.herokuapp.com/toplist').then((response) => {
      const { data } = response
      dispatch({ type: leagueCONSTANTS.GET_ALL_TOPLIST, payload: data })
      console.log(contextName, 'getAllTopList done')
    }).catch((err) => {
      dispatch({ type: leagueCONSTANTS.ERROR, payload: err })
      console.log(contextName, 'getAllTopList error', err)
    })
  }
}

function getAvaibleLeagues(dispatch) {
  console.log(contextName, 'getAvaibleLeagues start')
  return () => {
    dispatch({ type: leagueCONSTANTS.LOADING })
    axios.get('https://soccerstatsrestapi.herokuapp.com/leagues').then((response) => {
      // console.log(response.data)
      const { data } = response
      dispatch({ type: leagueCONSTANTS.GET_AVAIBLE_LEAGUES, payload: data })
      console.log(contextName, 'getAvaibleLeagues done')
    }).catch((err) => {
      dispatch({ type: leagueCONSTANTS.ERROR, payload: err })
      console.log(contextName, 'getAvaibleLeagues error', err)
    })
  }
}

function getMatchList(dispatch) {
  return () => {
    console.log(contextName, 'getMatchList start')
    dispatch({ type: leagueCONSTANTS.LOADING })
    axios('https://soccerstatsrestapi.herokuapp.com/matchlist').then((response) => {
      const { data } = response
      dispatch({ type: leagueCONSTANTS.GET_ALL_MATCHLIST, payload: data })
      console.log(contextName, 'getMatchList done')
    }).catch((err) => {
      dispatch({ type: leagueCONSTANTS.ERROR, payload: err })
      console.log(contextName, 'getMatchList error', err)
    })
  }
}

export const { Provider, Context } = createDataContext(
  leagueReducer,
  { selectLeague, getAvaibleLeagues, getAllTopList, getMatchList },
  { ...initialState }
)