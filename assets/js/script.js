import Greeter from './Greeter.js';
import ThemeSwitcher from './ThemeSwitcher.js';

const greeter = new Greeter();
const switcher = new ThemeSwitcher();

greeter.greetConsole();
greeter.cleanIntro();

switcher.attachEvent();
