import {
  sortByNumbers, 
  sortByString, 
  removeFromList, 
  addToList, 
  sortNewAddition,
  sortSelect,
  mutateData,
} from './helpers';

const initialState = {
  data: {},
  countriesView: [],
  countriesToSelect: [],
  sortByType: 'gold',
  sortByDir: 'desc',
};


const returnNewState = (state, changes) => {
  return Object.assign({}, state, changes)
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'HYDRATE_DATA':
      // take the original data and make an object for easy access to the data
      // and add initial list of ids to a simple array 
      // which is easier to manipulate
      return returnNewState(state, {
        data: action.payload.reduce((acc, country) => {
          return Object.assign({}, acc, {
            [country.countryName]: Object.assign({}, country, {
              displayName: country.countryName,
            }),
          })
        }, {}),
        countriesView: action.payload.map((country) => country.countryName),
      });
    case 'SORT_BY_NUMBERS':
      return returnNewState(
        state, 
        {
          countriesView: sortByNumbers(
            state.data, 
            state.countriesView, 
            action.property, 
            action.direction
          ),
          sortByType: action.property,
          sortByDir: action.direction,
        }
      );
    case 'SORT_BY_STRING':
      return returnNewState(
        state, 
        {
          countriesView: sortByString(
            state.data, 
            state.countriesView, 
            action.property, 
            action.direction
          ),
          sortByType: action.property,
          sortByDir: action.direction,
        }
      );
    case 'REMOVE_COUNTRY':
      return returnNewState(state, {
        countriesView: removeFromList(state.countriesView, action.country),
        countriesToSelect: sortSelect(
          state.data,
          addToList(state.countriesToSelect, action.country) 
        ),
      });
    case 'ADD_COUNTRY':
      return returnNewState(state, {
        countriesView: sortNewAddition(
          state.data,
          addToList(state.countriesView, action.country),
          state.sortByType,
          state.sortByDir,
        ),
        countriesToSelect: removeFromList(state.countriesToSelect, action.country),
      });
    case 'UPDATE_DATA':
      const newData = mutateData(state, action);
      return returnNewState(state, {
        data: newData,
        countriesView: sortNewAddition(
          newData,
          state.countriesView,
          state.sortByType,
          state.sortByDir,
        ),
      });
    default:
      return state;
  }
}
