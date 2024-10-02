import { Caretaker } from "../../../organisms";

export type PetOwner = {
  id: string;
  avatar: string;
};


export const MOCK_PET_OWNERS: PetOwner[] = [
  {
    id: '1',
    avatar: require('@rufferal/assets/src/images/mocks/asian-teenager-s-close-up-portrait-isolated-blue-studio/asian-teenager-s-close-up-portrait-isolated-blue-studio.jpg'),
  },
  {
    id: '2',
    avatar: require('@rufferal/assets/src/images/mocks/front-view-man-with-beard-posing/front-view-man-with-beard-posing.jpg'),
  },
  {
    id: '3',
    avatar: require('@rufferal/assets/src/images/mocks/handsome-man-outdoors-portrait/handsome-man-outdoors-portrait.jpg'),
  },
  {
    id: '4',
    avatar: require('@rufferal/assets/src/images/mocks/portrait-asian-teen-boy/portrait-asian-teen-boy.jpg'),
  },
  {
    id: '5',
    avatar: require('@rufferal/assets/src/images/mocks/portrait-beautiful-woman-wearing-formal-clothes/portrait-beautiful-woman-wearing-formal-clothes.jpg'),
  },
  {
    id: '6',
    avatar: require('@rufferal/assets/src/images/mocks/portrait-man-laughing/portrait-man-laughing.jpg'),
  },
  {
    id: '7',
    avatar: require('@rufferal/assets/src/images/mocks/portrait-smiling-woman-outdoors-with-beanie/portrait-smiling-woman-outdoors-with-beanie.jpg'),
  },
  {
    id: '8',
    avatar: require('@rufferal/assets/src/images/mocks/portrait-smiling-woman-patient-looking-camera-sitting-chair-waiting-room-stomatologic/portrait-smiling-woman-patient-looking-camera-sitting-chair-waiting-room-stomatologic.jpg'),
  },
  {
    id: '9',
    avatar: require('@rufferal/assets/src/images/mocks/portrait-white-man-isolated/portrait-white-man-isolated.jpg'),
  },
  {
    id: '10',
    avatar: require('@rufferal/assets/src/images/mocks/portrait-young-happy-man/portrait-young-happy-man.jpg'),
  },
  {
    id: '11',
    avatar: require('@rufferal/assets/src/images/mocks/smiley-woman-adventure-nature/smiley-woman-adventure-nature.jpg'),
  },
  {
    id: '12',
    avatar: require('@rufferal/assets/src/images/mocks/woman-wearing-glasses-looking-away/woman-wearing-glasses-looking-away.jpg'),
  },
  {
    id: '13',
    avatar: require('@rufferal/assets/src/images/mocks/worldface-american-woman-white-background/worldface-american-woman-white-background.jpg'),
  },
  {
    id: '14',
    avatar: require('@rufferal/assets/src/images/mocks/authentic-small-youthful-marketing-agency/authentic-small-youthful-marketing-agency.jpg'),
  },
  {
    id: '15',
    avatar: require('@rufferal/assets/src/images/mocks/beautiful-african-american-woman-cafe/beautiful-african-american-woman-cafe.jpg'),
  },
  {
    id: '16',
    avatar: require('@rufferal/assets/src/images/mocks/close-up-smiley-woman-taking-selfie/close-up-smiley-woman-taking-selfie.jpg'),
  },
  {
    id: '17',
    avatar: require('@rufferal/assets/src/images/mocks/close-up-view-attractive-adult-male-with-beard-sitting-open-terrace-typing-laptop-looking-screen-with-interested-smile-using-wi-fi-communicate-online-while-away-vacations/close-up-view-attractive-adult-male-with-beard-sitting-open-terrace-typing-laptop-looking-screen-with-interested-smile-using-wi-fi-communicate-online-while-away-vacations.jpg'),
  },
  {
    id: '18',
    avatar: require('@rufferal/assets/src/images/mocks/front-view-handsome-african-american-man-looking/front-view-handsome-african-american-man-looking.jpg'),
  },
  {
    id: '19',
    avatar: require('@rufferal/assets/src/images/mocks/front-view-smiley-woman-home/front-view-smiley-woman-home.jpg'),
  },
  {
    id: '20',
    avatar: require('@rufferal/assets/src/images/mocks/medium-shot-happy-woman/medium-shot-happy-woman.jpg'),
  },
  {
    id: '21',
    avatar: require('@rufferal/assets/src/images/mocks/portrait-young-woman-street/portrait-young-woman-street.jpg'),
  },
  {
    id: '22',
    avatar: require('@rufferal/assets/src/images/mocks/positive-happy-black-lady-posing-outdoors-smiling/positive-happy-black-lady-posing-outdoors-smiling.jpg'),
  },
  {
    id: '23',
    avatar: require('@rufferal/assets/src/images/mocks/stylish-brunette-girl-with-pierced-nose-trendy-shirt-smiling-white-teeth-looking-camera-standing-happy-confident-against-studio-background/stylish-brunette-girl-with-pierced-nose-trendy-shirt-smiling-white-teeth-looking-camera-standing-happy-confident-against-studio-background.jpg'),
  },
  //   { id: '24', avatar: require('@rufferal/') },
  //   { id: '25', avatar: require('@rufferal/') },
  //   { id: '26', avatar: require('@rufferal/') },
  //   { id: '27', avatar: require('@rufferal/') },
];

export const MOCK_CARETAKERS: Caretaker[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    forename: 'Paris',
    surname: 'Monaghan',
    starRating: 4.9,
    rufferalCount: 27,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/front-view-man-with-beard-posing/front-view-man-with-beard-posing.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-smiling-woman-patient-looking-camera-sitting-chair-waiting-room-stomatologic/portrait-smiling-woman-patient-looking-camera-sitting-chair-waiting-room-stomatologic.jpg'),
      require('@rufferal/assets/src/images/mocks/worldface-american-woman-white-background/worldface-american-woman-white-background.jpg'),
    ],
    minimumBookingCost: 29,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-1.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    forename: 'Antonio',
    surname: 'Salazar',
    starRating: 5.0,
    rufferalCount: 13,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/asian-teenager-s-close-up-portrait-isolated-blue-studio/asian-teenager-s-close-up-portrait-isolated-blue-studio.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-asian-teen-boy/portrait-asian-teen-boy.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-smiling-woman-outdoors-with-beanie/portrait-smiling-woman-outdoors-with-beanie.jpg'),
    ],
    minimumBookingCost: 18,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-2.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    forename: 'Austin',
    surname: 'Biggs',
    starRating: 4.6,
    rufferalCount: 9,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/portrait-asian-teen-boy/portrait-asian-teen-boy.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-smiling-woman-outdoors-with-beanie/portrait-smiling-woman-outdoors-with-beanie.jpg'),
      require('@rufferal/assets/src/images/mocks/smiley-woman-adventure-nature/smiley-woman-adventure-nature.jpg'),
    ],
    minimumBookingCost: 40,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-3.png'),
  },
  {
    id: 'uiowuher-827y-sjdh-d9au-fhiuw3ho8wei',
    forename: 'Fayette',
    surname: 'Vasquez',
    starRating: 4.8,
    rufferalCount: 6,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/front-view-man-with-beard-posing/front-view-man-with-beard-posing.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-white-man-isolated/portrait-white-man-isolated.jpg'),
      require('@rufferal/assets/src/images/mocks/woman-wearing-glasses-looking-away/woman-wearing-glasses-looking-away.jpg'),
    ],
    minimumBookingCost: 37,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-4.png'),
  },
  {
    id: '5e7f45a3-3b2a-4d62-9f84-2a8c2d4b5479',
    forename: 'Emma',
    surname: 'Johnson',
    starRating: 4.5,
    rufferalCount: 5,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/asian-teenager-s-close-up-portrait-isolated-blue-studio/asian-teenager-s-close-up-portrait-isolated-blue-studio.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-beautiful-woman-wearing-formal-clothes/portrait-beautiful-woman-wearing-formal-clothes.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-young-happy-man/portrait-young-happy-man.jpg'),
    ],
    minimumBookingCost: 45,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-1.png'),
  },
  {
    id: '71c7c10b-4c6f-442e-9e05-03a98c1f9a1e',
    forename: 'Liam',
    surname: 'Smith',
    starRating: 4.2,
    rufferalCount: 6,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/portrait-smiling-woman-patient-looking-camera-sitting-chair-waiting-room-stomatologic/portrait-smiling-woman-patient-looking-camera-sitting-chair-waiting-room-stomatologic.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-man-laughing/portrait-man-laughing.jpg'),
      require('@rufferal/assets/src/images/mocks/worldface-american-woman-white-background/worldface-american-woman-white-background.jpg'),
    ],
    minimumBookingCost: 50,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-2.png'),
  },
  {
    id: 'd0e7ed8d-1d94-48a0-bd68-11c816e5eabb',
    forename: 'Noah',
    surname: 'Miller',
    starRating: 3.0,
    rufferalCount: 3,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/worldface-american-woman-white-background/worldface-american-woman-white-background.jpg'),
      require('@rufferal/assets/src/images/mocks/front-view-man-with-beard-posing/front-view-man-with-beard-posing.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-asian-teen-boy/portrait-asian-teen-boy.jpg'),
    ],
    minimumBookingCost: 15,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-3.png'),
  },
  {
    id: '2c7b10f5-bd5f-4e96-9bb6-64f15dff66a3',
    forename: 'Sophia',
    surname: 'Williams',
    starRating: 3.8,
    rufferalCount: 4,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/woman-wearing-glasses-looking-away/woman-wearing-glasses-looking-away.jpg'),
      require('@rufferal/assets/src/images/mocks/asian-teenager-s-close-up-portrait-isolated-blue-studio/asian-teenager-s-close-up-portrait-isolated-blue-studio.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-smiling-woman-patient-looking-camera-sitting-chair-waiting-room-stomatologic/portrait-smiling-woman-patient-looking-camera-sitting-chair-waiting-room-stomatologic.jpg'),
    ],
    minimumBookingCost: 20,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-4.png'),
  },
  {
    id: '9e45f8a6-d4b9-4d72-b9f3-5f908d01b542',
    forename: 'Olivia',
    surname: 'Brown',
    starRating: 5.0,
    rufferalCount: 19,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/portrait-beautiful-woman-wearing-formal-clothes/portrait-beautiful-woman-wearing-formal-clothes.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-smiling-woman-outdoors-with-beanie/portrait-smiling-woman-outdoors-with-beanie.jpg'),
      require('@rufferal/assets/src/images/mocks/portrait-white-man-isolated/portrait-white-man-isolated.jpg'),
    ],
    minimumBookingCost: 75,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-1.png'),
  },
  {
    id: '3c8e18f6-68cf-4c7a-80f0-982f7a9e1565',
    forename: 'Ethan',
    surname: 'Wilson',
    starRating: 4.7,
    rufferalCount: 8,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/portrait-man-laughing/portrait-man-laughing.jpg'),
      require('@rufferal/assets/src/images/mocks/handsome-man-outdoors-portrait/handsome-man-outdoors-portrait.jpg'),
      require('@rufferal/assets/src/images/mocks/smiley-woman-adventure-nature/smiley-woman-adventure-nature.jpg'),
    ],
    minimumBookingCost: 85,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-2.png'),
  },
  {
    id: 'b0cafe43-dac5-4b77-b57f-5c8c93e2e7e5',
    forename: 'James',
    surname: 'Moore',
    starRating: 2.0,
    rufferalCount: 1,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/portrait-young-happy-man/portrait-young-happy-man.jpg'),
    ],
    minimumBookingCost: 8,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-3.png'),
  },
  {
    id: '1c2db2ef-1c7c-49b7-b64b-3eeb1c24e2be',
    forename: 'Ana',
    surname: 'Davis',
    starRating: 2.5,
    rufferalCount: 2,
    rufferalSampling: [
      require('@rufferal/assets/src/images/mocks/portrait-man-laughing/portrait-man-laughing.jpg'),
      require('@rufferal/assets/src/images/mocks/handsome-man-outdoors-portrait/handsome-man-outdoors-portrait.jpg'),
    ],
    minimumBookingCost: 10,
    isFavorite: false,
    avatar: require('@rufferal/assets/src/images/mocks/search-mock-4.png'),
  },
];
