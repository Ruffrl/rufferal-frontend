// lib/tailwind.js
import { create } from 'twrnc';

// create the customized version...
const tw = create(require(`./tailwind.config`));

// this becomes the main function your app uses
export default tw;
