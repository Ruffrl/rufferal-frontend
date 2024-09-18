// lib/tailwind.js
import { create } from 'twrnc';

// create the customized version...
const ruffwind = create(require(`./tailwind.config`));

// this becomes the main function your app uses
export default ruffwind;
