import { capitalize, PickerOption } from '../../../../../..';

const COLORS = [
  'black',
  'blue-gray',
  'blue',
  'chocolate',
  'cinnamon',
  'cream',
  'fawn',
  'golden',
  'gray',
  'orange',
  'red',
  'smoke',
  'yellow',
  'silver',
  'brown',
  'white',
];

const BREEDS = [
  'english pointer',
  'english setter',
  'kerry blue terrier',
  'cairn terrier',
  'english cocker spaniel',
  'gordon setter',
  'airedale terrier',
  'australian terrier',
  'bedlington terrier',
  'border terrier',
  'bull terrier',
  'fox terrier (smooth)',
  'english toy terrier (black&tan)',
  'swedish vallhund',
  'belgian shepherd dog',
  'old english sheepdog',
  'griffon nivernais',
  'briquet griffon vendeen',
  'ariegeois',
  'gascon saintongeois',
  'great gascony blue',
  'poitevin',
  'billy',
  'artois hound',
  'porcelaine',
  'small blue gascony',
  'blue gascony griffon',
  'grand basset griffon vendeen',
  'norman artesien basset',
  'blue gascony basset',
  'basset fauve de bretagne',
  'portuguese water dog',
  'welsh corgi (cardigan)',
  'welsh corgi (pembroke)',
  'irish soft coated wheaten terrier',
  'yugoslavian shepherd dog - sharplanina',
  'jämthund',
  'basenji',
  'beauce sheepdog',
  'bernese mountain dog',
  'appenzell cattle dog',
  'entlebuch cattle dog',
  'karelian bear dog',
  'finnish spitz',
  'newfoundland',
  'finnish hound',
  'polish hound',
  'komondor',
  'kuvasz',
  'puli',
  'pumi',
  'hungarian short-haired pointer (vizsla)',
  'great swiss mountain dog',
  'swiss hound',
  'small swiss hound',
  'st. bernard',
  'coarse-haired styrian hound',
  'austrian black and tan hound',
  'austrian  pinscher',
  'maltese',
  'fawn brittany griffon',
  'petit basset griffon vendeen',
  'tyrolean hound',
  'lakeland terrier',
  'manchester terrier',
  'norwich terrier',
  'scottish terrier',
  'sealyham terrier',
  'skye terrier',
  'staffordshire bull terrier',
  'continental toy spaniel',
  'welsh terrier',
  'griffon bruxellois',
  'griffon belge',
  'petit brabançon',
  'schipperke',
  'bloodhound',
  'west highland white terrier',
  'yorkshire terrier',
  'catalan sheepdog',
  'shetland sheepdog',
  'ibizan podenco',
  'burgos pointing dog',
  'spanish mastiff',
  'pyrenean mastiff',
  'portuguese sheepdog',
  'portuguese warren hound-portuguese podengo',
  'brittany spaniel',
  'rafeiro of alentejo',
  'german spitz',
  'german wire- haired pointing dog',
  'weimaraner',
  'westphalian dachsbracke',
  'french bulldog',
  'kleiner münsterländer',
  'german hunting terrier',
  'german spaniel',
  'french water dog',
  'blue picardy spaniel',
  'wire-haired pointing griffon korthals',
  'picardy spaniel',
  'clumber spaniel',
  'curly coated retriever',
  'golden retriever',
  'briard',
  'pont-audemer spaniel',
  'saint germain pointer',
  'dogue de bordeaux',
  'deutsch langhaar',
  'large munsterlander',
  'german short- haired pointing dog',
  'irish red setter',
  'flat coated retriever',
  'labrador retriever',
  'field spaniel',
  'irish water spaniel',
  'english springer spaniel',
  'welsh springer spaniel',
  'sussex spaniel',
  'king charles spaniel',
  'smålandsstövare',
  'drever',
  'schillerstövare',
  'hamiltonstövare',
  'french pointing dog - gascogne type',
  'french pointing dog - pyrenean type',
  'swedish lapphund',
  'cavalier king charles spaniel',
  'pyrenean mountain dog',
  'pyrenean sheepdog - smooth faced',
  'irish terrier',
  'boston terrier',
  'long-haired pyrenean sheepdog',
  'slovakian chuvach',
  'dobermann',
  'boxer',
  'leonberger',
  'rhodesian ridgeback',
  'rottweiler',
  'dachshund',
  'bulldog',
  'serbian hound',
  'istrian short-haired hound',
  'istrian wire-haired hound',
  'dalmatian',
  'posavatz hound',
  'bosnian broken-haired hound - called barak',
  'collie rough',
  'bullmastiff',
  'greyhound',
  'english foxhound',
  'irish wolfhound',
  'beagle',
  'whippet',
  'basset hound',
  'deerhound',
  'italian spinone',
  'german shepherd dog',
  'american cocker spaniel',
  'dandie dinmont terrier',
  'fox terrier (wire)',
  'castro laboreiro dog',
  'bouvier des ardennes',
  'poodle',
  'estrela mountain dog',
  'french spaniel',
  'picardy sheepdog',
  'ariege pointing dog',
  'bourbonnais pointing dog',
  'auvergne pointer',
  'giant schnauzer',
  'schnauzer',
  'miniature schnauzer',
  'german pinscher',
  'miniature pinscher',
  'affenpinscher',
  'portuguese pointing dog',
  'sloughi',
  'finnish lapponian dog',
  'hovawart',
  'bouvier des flandres',
  'kromfohrländer',
  'borzoi - russian hunting sighthound',
  'bergamasco shepherd dog',
  'italian volpino',
  'bolognese',
  'neapolitan mastiff',
  'italian rough-haired segugio',
  "cirneco dell'etna",
  'italian sighthound',
  'maremma and the abruzzes sheepdog',
  'italian pointing dog',
  'norwegian hound',
  'spanish hound',
  'chow chow',
  'japanese chin',
  'pekingese',
  'shih tzu',
  'tibetan terrier',
  'canadian eskimo dog',
  'samoyed',
  'hanoverian scent hound',
  'hellenic hound',
  'bichon frise',
  'pudelpointer',
  'bavarian mountain scent hound',
  'chihuahua',
  'french tricolour hound',
  'french white & black hound',
  'wetterhoun',
  'stabijhoun',
  'dutch shepherd dog',
  'drentsche partridge dog',
  'fila brasileiro',
  'landseer (european continental type)',
  'lhasa apso',
  'afghan hound',
  'serbian tricolour hound',
  'tibetan mastiff',
  'tibetan spaniel',
  'deutsch stichelhaar',
  'little lion dog',
  'xoloitzcuintle',
  'great dane',
  'australian silky terrier',
  'norwegian buhund',
  'mudi',
  'hungarian wire-haired pointer',
  'hungarian greyhound',
  'hungarian hound - transylvanian scent hound',
  'norwegian elkhound grey',
  'alaskan malamute',
  'slovakian hound',
  'bohemian wire-haired pointing griffon',
  'cesky terrier',
  'atlas mountain dog (aidi)',
  'pharaoh hound',
  'majorca mastiff',
  'havanese',
  'polish lowland sheepdog',
  'tatra shepherd dog',
  'pug',
  'alpine dachsbracke',
  'akita',
  'shiba',
  'japanese terrier',
  'tosa',
  'hokkaido',
  'japanese spitz',
  'chesapeake bay retriever',
  'mastiff',
  'norwegian lundehund',
  'hygen hound',
  'halden hound',
  'norwegian elkhound black',
  'saluki',
  'siberian husky',
  'bearded collie',
  'norfolk terrier',
  'canaan dog',
  'greenland dog',
  'brazilian tracker',
  'norrbottenspitz',
  'croatian shepherd dog',
  'karst shepherd dog',
  'montenegrin mountain hound',
  'old danish pointing dog',
  'grand griffon vendeen',
  'coton de tulear',
  'lapponian herder',
  'spanish greyhound',
  'american staffordshire terrier',
  'australian cattle dog',
  'chinese crested dog',
  'icelandic sheepdog',
  'beagle harrier',
  'eurasian',
  'dogo argentino',
  'australian kelpie',
  'otterhound',
  'harrier',
  'collie smooth',
  'border collie',
  'romagna water dog',
  'german hound',
  'black and tan coonhound',
  'american water spaniel',
  'irish glen of imaal terrier',
  'american foxhound',
  'russian-european laika',
  'east siberian laika',
  'west siberian laika',
  'azawakh',
  'dutch smoushond',
  'shar pei',
  'peruvian hairless dog',
  'saarloos wolfhond',
  'nova scotia duck tolling retriever',
  'dutch schapendoes',
  'nederlandse kooikerhondje',
  'broholmer',
  'french white and orange hound',
  'kai',
  'kishu',
  'shikoku',
  'wirehaired slovakian pointer',
  'majorca shepherd dog',
  'great anglo-french tricolour hound',
  'great anglo-french white and black hound',
  'great anglo-french white & orange hound',
  'medium-sized anglo-french hound',
  'south russian shepherd dog',
  'russian black terrier',
  'caucasian shepherd dog',
  'canarian warren hound',
  'irish red and white setter',
  'kangal shepherd dog',
  'czechoslovakian wolfdog',
  'polish greyhound',
  'korea jindo dog',
  'central asia shepherd dog',
  'spanish water dog',
  'italian short-haired segugio',
  'thai ridgeback dog',
  'parson russell terrier',
  'saint miguel cattle dog',
  'brazilian terrier',
  'australian shepherd',
  'italian cane corso',
  'american akita',
  'jack russell terrier',
  'presa canario',
  'white swiss shepherd dog',
  'taiwan dog',
  'romanian mioritic shepherd dog',
  'romanian carpathian shepherd dog',
  'australian stumpy tail cattle dog',
  'russian toy',
  'cimarrón uruguayo',
  'polish hunting dog',
  'bosnian and herzegovinian - croatian shepherd dog',
  'danish-swedish farmdog',
  'romanian bucovina shepherd',
  'thai bangkaew dog',
  'miniature bull terrier',
  'lancashire heeler',
  'segugio maremmano',
  'kintamani-bali dog',
  'prague ratter',
  'bohemian shepherd dog',
  'yakutian laika',
  'estonian hound',
  'miniature american shepherd',
  'transmontano mastiff',
  'continental bulldog',
  'valencian terrier',
];

const COAT_LENGTHS = ['short', 'medium', 'long', 'wire', 'curly', 'hairless'];

const convertToPicker = (options: string[]): PickerOption[] =>
  options.map((option) => {
    return { value: option, text: capitalize(option) };
  });

export const dogColorOptions: PickerOption[] = convertToPicker(COLORS);
export const dogBreedOptions: PickerOption[] = convertToPicker(BREEDS);
export const dogCoatOptions: PickerOption[] = convertToPicker(COAT_LENGTHS);
