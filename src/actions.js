export const hydrateData = (payload) => ({
  type: 'HYDRATE_DATA',
  payload,
});

export const sortByNumbers = (property, direction) => ({
  type: 'SORT_BY_NUMBERS',
  property,
  direction,
})

export const sortByString = (property, direction) => ({
  type: 'SORT_BY_STRING',
  property,
  direction,
})

export const removeCountry = (country) => ({
  type: 'REMOVE_COUNTRY',
  country,
})

export const addCountry = (country) => ({
  type: 'ADD_COUNTRY',
  country,
})

export const updateData = (value, property, country) => ({
  type: 'UPDATE_DATA',
  value,
  property,
  country,
})