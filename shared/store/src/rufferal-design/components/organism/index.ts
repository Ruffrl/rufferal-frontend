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

export { RAccount } from './admin/RAccount';
export { RAllAccounts } from './admin/RAllAccounts';

export { RFormCreateCat } from './forms/RFormCreateCat';
export { RFormCreateDog } from './forms/RFormCreateDog';
export { RFormEmailPassword } from './forms/RFormEmailPassword';
export type { AccessForm } from './forms/RFormEmailPassword';

export { RCounter } from './RCounter';
export { RGlobalError } from './RGlobalError';
export { RLogoutButton } from './RLogoutButton';
export { ROnboardingButtons } from './ROnboardingButtons';
export { ROnboardingWeb } from './ROnboardingWeb';
export { RPasswordValidator } from './RPasswordValidator';
export { RSocialOnboarding } from './RSocialOnboarding';
