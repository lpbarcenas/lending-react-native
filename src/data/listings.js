import colors from '../styles/colors';

const listing1Photo = require('./photos/listing1.png');
const listing2Photo = require('./photos/listing2.png');
const listing3Photo = require('./photos/listing3.png');
const listing4Photo = require('./photos/listing4.png');
const listing5Photo = require('./photos/listing5.png');
const listing6Photo = require('./photos/listing6.png');
const listing7Photo = require('./photos/listing7.png');
const listing8Photo = require('./photos/listing8.png');
const listing9Photo = require('./photos/listing9.png');
const listing10Photo = require('./photos/listing10.png');
const listing11Photo = require('./photos/listing11.png');
const listing12Photo = require('./photos/listing12.png');
const listing13Photo = require('./photos/listing13.png');
const listing14Photo = require('./photos/listing14.png');
const listing15Photo = require('./photos/listing15.png');
const listing16Photo = require('./photos/listing16.png');

const listings = [
  {
    title: 'Top Lenders',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: listing1Photo,
        type: 'BOAT CASH',
        title: 'Popular loans for Fishermen',
        location: '3.5 mi away',
        price: 60000,
        priceType: 'per loan',
        stars: 29,
        color: colors.gray04,
      },
      {
        id: 2,
        photo: listing2Photo,
        type: 'TASTY CASH',
        title: 'Cash for your taste',
        location: '15 mi away',
        price: 70000,
        priceType: 'per loan',
        stars: 4,
        color: colors.darkOrange,
      },
      {
        id: 3,
        photo: listing3Photo,
        type: 'RIDERS LOANERS',
        title: 'Car owners for cash',
        location: '33 mi away',
        price: 47000,
        priceType: 'per loan',
        stars: 30,
        color: colors.black,
      },
      {
        id: 4,
        photo: listing4Photo,
        type: 'BIKE RIDES',
        title: 'New loaners',
        location: '34 mi away',
        price: 57000,
        priceType: 'per loan',
        stars: 70,
        color: colors.brown01,
      },
      {
        id: 5,
        photo: listing5Photo,
        type: 'SURF CASH',
        title: 'Surf Bondi\'s waves, then eat & drink like a local',
        location: '34 mi away',
        price: 61000,
        priceType: 'per loan',
        stars: 66,
        color: colors.blue,
      },
      {
        id: 6,
        photo: listing6Photo,
        type: 'DRAWING CLASS',
        title: 'A drawing/walking tour in Montmartre',
        location: '34 mi away',
        price: 55000,
        priceType: 'per loan',
        stars: 15,
        color: colors.brown02,
      },
    ],
  },
  {
    title: 'First Loans',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 7,
        photo: listing7Photo,
        type: 'LOANERS SIDE',
        title: 'Affordable House loans',
        location: '34 mi away',
        price: 72000,
        priceType: 'per loan',
        stars: 101,
        color: colors.green01,
      },
      {
        id: 8,
        photo: listing8Photo,
        type: 'LOANERS FRONT',
        title: 'Loans for your housing plans',
        location: '34 mi away',
        price: 69000,
        priceType: 'per loan',
        stars: 119,
        color: colors.brown01,
      },
      {
        id: 9,
        photo: listing9Photo,
        type: 'LOANERS HOUSE',
        title: 'House loans for urgency',
        location: '34 mi away',
        price: 152000,
        priceType: 'per loan',
        stars: 320,
        color: colors.darkOrange,
      },
      {
        id: 10,
        photo: listing10Photo,
        type: 'LOANERS BACK',
        title: 'Emergency loan',
        location: '34 mi away',
        price: 116000,
        priceType: 'per loan',
        stars: 300,
        color: colors.gray04,
      },
      {
        id: 11,
        photo: listing11Photo,
        type: 'CASH EMPIRE',
        title: '34 mi away',
        location: 'Loans for business',
        price: 182,
        priceType: 'per loan',
        stars: 132,
        color: colors.green01,
      },
    ],
  },
  {
    title: 'Popular Lenders',
    boldTitle: true,
    showAddToFav: false,
    listings: [
      {
        id: 12,
        photo: listing12Photo,
        type: 'LENDER',
        title: 'G\'raj Mahal',
        price: '30000',
        priceType: 'per loan',
        stars: 0,
        color: colors.blue,
      },
      {
        id: 13,
        photo: listing13Photo,
        type: 'LENDER',
        title: 'Le Fond',
        price: '30000',
        priceType: 'per loan',
        stars: 0,
        color: colors.black,
      },
      {
        id: 14,
        photo: listing14Photo,
        type: 'BANK',
        title: 'The Glass Onion',
        price: '34000',
        priceType: 'per loan',
        stars: 0,
        color: colors.brown01,
      },
      {
        id: 15,
        photo: listing15Photo,
        type: 'LENDER',
        title: 'The Waiting Room',
        price: '34000',
        priceType: 'per loan',
        stars: 0,
        color: colors.green01,
      },
      {
        id: 16,
        photo: listing16Photo,
        type: 'BANK',
        title: 'Bar Boulud',
        price: '46000',
        priceType: 'per loan',
        stars: 0,
        color: colors.gray04,
      },
    ],
  },
];

export default listings;
