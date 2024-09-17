// lib/tailwind.js
import { create } from 'twrnc';

// create the customized version...
const tailwind = create(require(`./tailwind.config`));

// this becomes the main function your app uses
export default tailwind;
