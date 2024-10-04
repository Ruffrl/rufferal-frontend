/* [ORGANISM] ATOMIC DESIGN
 *
 * Organisms define the structure and layout of a page
 *
 * Organisms are more complex components that form distinct sections of an interface
 * They are made up of groups of molecules and atoms working together
 * Examples of organisms include:
 *   Header: Logo (atom), navigation menu (molecule), search bar (molecule)
 *   Footer: Navigation links (molecules), contact information (molecule)
 *
 */

export type { Caretaker } from './caretaker-search-item/caretaker-search-item';

export { CaretakerSearchHeader } from './caretaker-search-header/caretaker-search-header';
export { CaretakerSearchItem } from './caretaker-search-item/caretaker-search-item';
export { FeatureNavigation } from './feature-navigation/feature-navigation';
