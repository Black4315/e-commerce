// A dedicated GSAP setup file (e.g., gsap.config.js)
// This file should be imported at the very start of your app
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

// Register the plugin
gsap.registerPlugin(CustomEase);

// Create your custom ease. Your format is correct.
CustomEase.create('easeS', '0.4,0,0.6,1');

// Now you can use the ease anywhere in your application
// The `easeS` ease is now globally available.
export { gsap };