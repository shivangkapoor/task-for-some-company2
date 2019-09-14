// asc = 1,2,3 | desc = 3,2,1

export const sortByNumbers = (data, countriesView, property, direction) => {
  // need a new ref as sort mutates and won't update redux
  const cloneCountriesView = [...countriesView];
  // high to low
  return cloneCountriesView.sort((a, b) => {
    if (data[a][property] > data[b][property]) {
      return direction === 'desc' ? -1 : 1;
    }
    if (data[a][property] < data[b][property]) {
      return direction === 'desc' ? 1 : -1;
    }
    // TODO: if 'gold', next sort by 'silver' etc...
    // else sort by country name
    return data[a]['displayName'].localeCompare(data[b]['displayName'])
  })
}

export const sortByString = (data, countriesView, property, direction) => {
  // need a new ref as sort mutates and won't update redux
  const cloneCountriesView = [...countriesView];
  // high to low
  return cloneCountriesView.sort((a, b) => {
    if (direction === 'desc') {
      return data[a][property].localeCompare(data[b][property])
    }
    return data[b][property].localeCompare(data[a][property])
  })
}

export const removeFromList = (countriesView, country) => {
  return countriesView.filter((countryInView) => countryInView !== country);
}

export const addToList = (countriesView, country) => {
  return [...countriesView, country];
}

export const sortNewAddition = (data, countriesView, property, direction) => {
  if (property !== 'displayName') {
    return sortByNumbers(data, countriesView, property, direction);
  }  
  return sortByString(data, countriesView, property, direction);
}

export const sortSelect = (data, countriesView) => {
  // need a new ref as sort mutates and won't update redux
  const cloneCountriesView = [...countriesView];
  // high to low
  return cloneCountriesView.sort((a, b) => {
    // else sort by country name
    return data[a]['displayName'].localeCompare(data[b]['displayName'])
  })
}

const calculateTotal = (property, countryData, value) => {
  // this is pretty ugly but it was getting late :/
  if (property === 'gold') {
    return countryData.silver + countryData.bronze + value;
  }
  if (property === 'silver') {
    return countryData.gold + countryData.bronze + value;
  }
  if (property === 'bronze') {
    return countryData.gold + countryData.silver + value;
  }
  return countryData.total;
}

export const mutateData = (state, action) => {
  return Object.assign(
    {}, 
    state.data, {
      [action.country]: Object.assign(
        {}, 
        state.data[action.country], 
        {
          [action.property]: action.value,
          total: calculateTotal(
            action.property, 
            state.data[action.country], 
            action.value
          ),
        }
      ),
    }
  )
}