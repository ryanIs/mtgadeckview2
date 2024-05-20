# DeckView 2 - Magic The Gather Arena Deck Assistant

This application helps display every card in your (obviously 250-sized 😄) deck. Certain game-situations require exact knowledge of what ETB and active abilities your deck can perform when using cards that can pull from the deck.

This helps you quickly access your deck in such sticky situations.

<img src="./preview-img.png" title="Preview image of the array of cards shown by this application. Have it open while you play Magic on another screen. Resize with CTRL + SCROLL_WHEEL." />

# Usage:

In your MTGA client - Export your desired deck.

Paste it into the `src/app/app.component.ts` `let myDeckPasteStr_` template string.

Run with `npm install` -> `npm start`. Once loaded - open browser to: `http://localhost:4200`

<!-- (You may use `?d=seconddeck`) if you have them loaded as variables as well (eval). {Objective} -->

# Notes:

You use the navigation at the top to goto spells by their costs.

Cards such as <a target="_blank" href="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=555419&type=card"><b>Rocco, Cabaretti Caterer</b></a> that pull out a card based on available mana will benefit greatly from this application.

# Development Objectives

<ul>
  <li>Implementation of the handy search filters from the in-game MTGA deck manager (e.g. t:Creature)</li>
  <li>Show only: multi-colored (2, 3, 4, and 5)</li>
  <li>Quick-button to fetch all pooled cards for cards like <a target="_blank" href="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=527313&type=card"><b>Moon-Blessed Cleric</b></a></li>
  <li>Make card counts more intuitive (the current border method can be improved upon)</li>
  <li>When info check-box first-time clicked: scroll all scrollable boxes to "name" section (or something important like description or type)</li>
  <li>Card click pops up hover image instead of new tab link</li>
  <li>Massive JSON files loaded externally, not imported on compile (handle asynchronously with load interface as needed)</li>
  <li>Improve process of importing deck; shouldn't have to edit source files (e.g. paste into a front-end text-field</li>
  <li>Some cards missing? (either from gatherers or some other weird error)</li>
  <li style="text-decoration: line-through; opacity: 0.5;">Add detailed info (as optional display)</li>
  <li style="text-decoration: line-through; opacity: 0.5;">Navigation jump at top</li>
  <li style="text-decoration: line-through; opacity: 0.5;">Add card database for Historic</li>
</ul>

# Credit

Thank you to https://gatherer.wizards.com (Wizards of the Coast) for the card image API and amazing game Magic the Gathering.

Thank you to https://mtgjson.com for the card information JSON API.

Thanks to: 

https://github.com/sardapv/angular-material-starter-template

https://mtgjson.com/downloads/all-files/#allsetfiles