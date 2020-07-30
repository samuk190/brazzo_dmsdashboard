import { atom, selector } from 'recoil';
import { format } from 'date-fns';
import api from '~/services/api';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: new Date(), // default value (aka initial value)
});

export const brands = atom({
  key: 'brands', // unique ID (with respect to other atoms/selectors)
  default: [],
  persistence_UNSTABLE: {
    type: 'brands',
  }, // default value (aka initial value)
});
export const dealerships = atom({
  key: 'dealerships', // unique ID (with respect to other atoms/selectors)
  default: [],
  persistence_UNSTABLE: {
    type: 'dealerships',
  }, // default value (aka initial value)
});
export const listdealerships = atom({
  key: 'listdealerships', // unique ID (with respect to other atoms/selectors)
  default: [],
  persistence_UNSTABLE: {
    type: 'listdealerships',
  }, // default value (aka initial value)
});
export const groups = atom({
  key: 'groups', // unique ID (with respect to other atoms/selectors)
  default: [],
  persistence_UNSTABLE: {
    type: 'groups',
  }, // default value (aka initial value)
});
export const regions = atom({
  key: 'regions', // unique ID (with respect to other atoms/selectors)
  default: ['Todos'],
  persistence_UNSTABLE: {
    type: 'regions',
  }, // default value (aka initial value)
});
export const listregions = atom({
  key: 'listregions', // unique ID (with respect to other atoms/selectors)
  default: ['Todos', 'Norte', 'Nordeste', 'Sudeste', 'Sudoeste', 'Sul'], // default value (aka initial value)]
});

export const listbrands = atom({
  key: 'listbrands', // unique ID (with respect to other atoms/selectors)
  default: ['Todos'], // default value (aka initial value)]
});

export const dateInitial = atom({
  key: 'dateInitial', // unique ID (with respect to other atoms/selectors)
  default: new Date(),
  persistence_UNSTABLE: {
    type: 'dateInitial',
  }, // default value (aka initial value)
});
export const dateInitialFormatted = selector({
  key: 'dateInitialFormatted',
  default: new Date(),
  persistence_UNSTABLE: {
    type: 'dateInitialFormatted',
  }, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const date = get(dateInitial);
    console.log(date);
    // return date;

    return format(new Date(date), 'dd/MM/yyyy');
  },
});

export const dateFinal = atom({
  key: 'dateFinal',
  // unique ID (with respect to other atoms/selectors)
  default: new Date(),
  persistence_UNSTABLE: {
    type: 'dateFinal',
  }, // default value (aka initial value)
});
export const dateFinalFormatted = selector({
  key: 'dateFinalFormatted',
  default: new Date(),
  persistence_UNSTABLE: {
    type: 'dateFinalFormatted',
  },
  // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const date = get(dateFinal);
    return format(new Date(date), 'dd/MM/yyyy');

    // return date;
  },
});

export const asyncbrands = selector({
  key: 'asyncbrands', // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    const data = await api.get('brands');
    const title = await data.map(function(name) {
      return name.title;
    });
    console.log(title);
    return title;
  },
});
