import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';

// Import our necessary set data from the json files.
import mainJSData from './import-data.js'

// myDeckPasteStr_ contains the full deck string exported directly from MTGA.
let myDeckPasteStr_ = `
Companion
1 Yorion, Sky Nomad (MUL) 129

Deck
2 Snow-Covered Forest (KHM) 284
1 Toxic Deluge (MH3) 277
1 Brass's Tunnel-Grinder (LCI) 135
2 Invasion of Tolvada (MOM) 241
4 Collector's Vault (WOE) 244
1 Sokenzan, Crucible of Defiance (NEO) 276
3 Restless Anchorage (LCI) 280
1 Restless Cottage (WOE) 258
1 Mirran Safehouse (ONE) 232
1 A-Hall of Tagsin (BRO) 263
1 Echoing Deeps (LCI) 271
1 Field of Ruin (MID) 262
1 Thespian's Stage (GTC) 248
1 Monumental Henge (MH3) 222
1 The Mycosynth Gardens (ONE) 256
4 Khalni Garden (J21) 121
1 Sunfall (MOM) 40
1 Farewell (NEO) 13
4 Assemble the Team (Y23) 17
1 Squirming Emergence (LCI) 241
2 Snow-Covered Plains (KHM) 277
2 Snow-Covered Swamp (KHM) 281
3 Snow-Covered Mountain (KHM) 283
2 Snow-Covered Island (KHM) 278
4 The World Tree (KHM) 275
1 Three Steps Ahead (OTJ) 75
1 Demonic Bargain (VOW) 103
1 Port of Karfell (KHM) 265
1 Nykthos, Shrine to Nyx (THS) 223
1 Lush Portico (MKM) 263
1 Underground Mortuary (MKM) 271
1 Commercial District (MKM) 259
2 Grim Servant (MH3) 97
3 Binding the Old Gods (KHM) 206
1 Karn's Bastion (WAR) 248
1 Phyrexian Scrapyard (Y23) 30
1 Emergence Zone (WAR) 245
1 Shifting Woodland (MH3) 228
4 Urza's Cave (MH3) 234
1 Inventors' Fair (KLR) 284
1 Nesting Grounds (MH3) 302
3 Dryad's Revival (MID) 183
1 Primal Command (OTP) 31
1 Hedge Maze (MKM) 262
1 Tan Jolom, the Worldwalker (Y24) 30
1 Otawara, Soaring City (NEO) 271
1 Fountainport (BLB) 253
1 Hanweir Battlements (SIR) 271
1 Hour of Revelation (AKR) 23
1 Fomori Vault (BIG) 29
1 Mizzix's Mastery (STA) 43
1 Phyrexian Tower (JMP) 493
1 Unburial Rites (SIS) 36
3 Moritte of the Frost (KHM) 223
1 Dust Bowl (OTP) 65
1 Takenuma, Abandoned Mire (NEO) 278
1 Mesmeric Orb (BRR) 31
1 Sevinne's Reclamation (MH3) 267
1 Ruthless Lawbringer (OTJ) 229
1 Fear of Change (Y25) 21
1 Aclazotz, Deepest Betrayal (LCI) 88
1 Littjara Mirrorlake (KHM) 264
1 Hostage Taker (XLN) 223
4 Surgical Metamorph (Y23) 6
4 Lively Dirge (OTJ) 93
1 Rite of Oblivion (MID) 237
4 Recruiter of the Guard (MH3) 266
1 A-The One Ring (LTR) 246
1 Gamble (SPG) 24
1 Restless Reef (LCI) 282
4 Crawling Sensation (SIR) 191
1 Colossal Skyturtle (NEO) 216
1 Timeless Witness (MH2) 179
1 Essence Reliquary (MH3) 24
1 Mount Doom (LTR) 258
1 Restless Vents (LCI) 284
1 Urgent Necropsy (MKM) 240
1 Enduring Vitality (DSK) 176
1 Mana Confluence (JOU) 163
1 Fierce Empath (M21) 181
1 Esika, God of the Tree (KHM) 168
1 Ertai Resurrected (DMU) 199
1 Ziatora's Proving Ground (SNC) 261
1 Charming Prince (FDN) 568
2 Fabled Passage (BLB) 252
1 Vesuvan Mist (Y23) 7
1 Beza, the Bounding Spring (BLB) 2
1 Treasure Vault (AFR) 261
1 Priest of Fell Rites (MH2) 208
1 Realm-Cloaked Giant (ELD) 26
1 Assassin's Trophy (MKM) 187
1 Boggart Trawler (MH3) 243
1 Eiganjo, Seat of the Empire (NEO) 268
1 Gnaw to the Bone (SIS) 50
1 Sunken Citadel (LCI) 285
1 Dedicated Dollmaker (Y24) 2
1 Pool of Vigorous Growth (J21) 28
1 Trackhand Trainer (Y25) 6
1 Contagion Dispenser (Y23) 19
1 Artist's Talent (BLB) 124
1 Anointed Procession (AKR) 2
1 Valgavoth's Lair (DSK) 271
1 The Shire (LTR) 260
1 Boseiju, Who Endures (NEO) 266
1 Mirrex (ONE) 254
1 Xander's Wake (Y22) 9
1 Invasion of Zendikar (MOM) 194
1 Fumigate (FDN) 575
3 Bring to Light (PIO) 209
1 Teferi, Who Slows the Sunset (MID) 245
1 Scavenger's Talent (BLB) 111
1 Spara's Headquarters (SNC) 257
1 Throes of Chaos (MH1) 150
1 Wrenn and Realmbreaker (MOM) 217
1 Springbloom Druid (MH1) 181
1 Conduit of Worlds (ONE) 163
2 Analyze the Pollen (MKM) 150
1 Day of Judgment (FDN) 140
1 Radiant Fountain (M21) 248
1 Mischievous Lookout (Y25) 25
1 Euru, Acorn Scrounger (Y25) 24
1 Tibalt, Wicked Tormentor (Y22) 43
2 Invasion of Ikoria (MOM) 190
3 Beseech the Mirror (WOE) 82
1 Season of the Burrow (BLB) 29
1 Invasion of Arcavios (MOM) 61
1 Tom Bombadil (LTR) 234
1 Wishclaw Talisman (ELD) 110
1 Restless Fortress (WOE) 259
1 Lotus Field (M20) 249
1 Kardur's Vicious Return (KHM) 217
1 Heaped Harvest (BLB) 175
2 Gate to Tumbledown (HBG) 81
1 Agatha's Soul Cauldron (WOE) 242
1 Coati Scavenger (LCI) 179
1 Worldwalker Helm (BIG) 7
1 Garruk, Wrath of the Wilds (Y22) 47
1 Disciple of Freyalise (MH3) 250
1 Ornithopter (BRR) 37
1 The Trickster-God's Heist (KHM) 232
1 Cogwork Progenitor (Y24) 1
1 Barbarian Ring (MH3) 299
1 Housemeld (Y25) 5
1 Cabaretti Revels (Y22) 21
1 Argoth, Sanctum of Nature (BRO) 256
1 Elvish Reclaimer (M20) 169
1 Key to the Archive (Y22) 59
1 Peregrin Took (LTR) 181
1 Ornate Imitations (Y25) 23
1 Insatiable Avarice (OTJ) 91
1 Tamiyo, Inquisitive Student (MH3) 242
1 Maze's End (PIO) 269
1 Goldberry, River-Daughter (LTR) 52
1 Retrofitter Foundry (C18) 57
1 Gilded Goose (ELD) 160
1 Crawling Barrens (FDN) 685
1 Hall of Oracles (STX) 267
1 Voldaren Estate (VOW) 267
1 A-Thran Portal (DMU) 259
1 Path to Exile (OTP) 6
1 Ghost Lantern (HBG) 155
1 Invasion of Innistrad (MOM) 115
1 Mystic Sanctuary (ELD) 247
1 Gingerbread Cabin (ELD) 245
1 Soul Warden (M10) 34
1 A Golden Opportunity (Y24) 13
1 Vigorous Farming (Y25) 19
1 Treasure Dredger (OTJ) 110
1 Expand the Sphere (ONE) 168
1 Spawning Pod (Y23) 16
1 A-Haywire Mite (BRO) 199
1 Repurposing Bay (DFT) 56
1 Chord of Calling (M15) 172
1 Cataclysmic Gearhulk (KLR) 12
1 Encroaching Mycosynth (ONE) 47
1 Golos, Tireless Pilgrim (M20) 226
1 Chimil, the Inner Sun (LCI) 249
1 Overlord of the Hauntwoods (DSK) 194
1 Leyline of Anticipation (WOT) 23
1 Labyrinth of Skophos (THB) 243
4 Dwarven Mine (ELD) 243
1 Idyllic Grange (ELD) 246
1 Witch's Cottage (ELD) 249
1 Whir of Invention (KLR) 73
1 Thundering Broodwagon (DFT) 225
1 Guidelight Pathmaker (DFT) 206
1 Great Desert Prospector (BRO) 7
1 Moon-Blessed Cleric (AFR) 26
1 Call the Bloodline (SIR) 101
1 Collector's Cage (BIG) 1
1 Tidecaller Mentor (BLB) 236
1 A-Karn, Living Legacy (DMU) 1
1 Niko Aris (KHM) 225
1 Rogue's Passage (PIO) 273
1 Davriel, Soul Broker (J21) 15

Sideboard
1 Yorion, Sky Nomad (MUL) 129


`

let mainData: any = mainJSData

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  $destroy: Subject<void> = new Subject();

  public searchFilter: string = ''

  public allCardData = []
  public console = window.console
  public showInfo: boolean = false
  public myDeckPasteStr = myDeckPasteStr_
  public FEObjs: {src: string, title: string, manaVal: string|number, allData: any, quantity: number}[] = []

  /*
    Match the behavior of the MTG search bar.

    Samples:

    "enters the battlefield" -> exact search
    enters the battlefield -> may contain any divided by spaces
    "enters the" battlefield -> exact match on "enters the" and has "battlefield" somewhere
    t:creature "enters the battlefield" -> card type=creature  and has exact search of "enters the battlefield"
    etc.
  */
  searchFilterKeyPressEvent(evt: any) {
    if(evt.key == 'Enter') {
      this.console.log(evt)
      // Objective: perform filter on FE

      this.searchFilter = this.searchFilter.toLowerCase()

      if(this.searchFilter.indexOf('type') != -1 || this.searchFilter.indexOf('type') != -1) {
        // Objective: filter by type and fetch
      }

    }
  }

  // Initialize the application.
  initApp() {
    
    // Deck
    // 1 Arcane Bombardment (SNC) 101
    // last is empty enter 
    let myDeck: string[] = []
    
    let deckCardQuantities: any = {}

    // handle special cases
    myDeckPasteStr_ = myDeckPasteStr_.replace(/DAR/g, 'DOM')

    // Parse into mydeck array
    let cardLines = myDeckPasteStr_.trim().split('\n')
    cardLines.pop() // remove last empty line
    cardLines.shift() // remove "Deck" first line 
    // cardLines.shift() // remove "Deck" first line 
    myDeck = cardLines.map(card => {
      let myCardQuantity = card.trim().substr(0, 2)

      card = card.trim().substr(2) // remove card count from beginning

      deckCardQuantities[card] = myCardQuantity.trim();
      return card
    })

    // Organize deck info
    let myDeckSrcs = myDeck.map(myCardNameFull => {
      if(myCardNameFull == "" || myCardNameFull.trim() == "Companion" || myCardNameFull.trim() == "Sideboard"  || myCardNameFull.trim() == "mpanion"  || myCardNameFull.trim() == "deboard"  || myCardNameFull.trim() == "ck") {
        return ["emptyReturn", 11]
      }
      let _splitter = myCardNameFull.split('(')
      // console.log(_splitter)
      let myCardName = _splitter[0].trim()
      
      // Handle missing set
      if(_splitter[1] == undefined) {
        console.log("_splitter[1] == undefined  myCardNameFull")
        console.log(myCardNameFull)
        return [`${myCardNameFull}`, 0] 
      }

      let myCardExpansion: any = _splitter[1].split(')')[0].trim()

      // handle special cases
      // if(myCardExpansion == 'DAR') {
      //   myCardExpansion = 'DOM'
      // }

      
      // forceGetImageUrl acts as a backup if the mmain gatherers API fails or 
      // is missing card data.
      let forceGetImageUrl
      
      let mvid = 0
      let myManaVal
      let myUniqueData
      try {

        // let mvid = standard.data.BRO.cards.filter(o => o.name.indexOf(myCardName)!=-1)[0].identifiers.multiverseId
        //  mvid = standard.data.BRO.cards.filter(o => o.name == (myCardName) )[0].identifiers.multiverseId

        // let myUniqueData = standard.data[myCardExpansion].cards.filter(o => o.name == (myCardName))[0]
        // let myUniqueData = BROImportData.data[myCardExpansion].cards.filter(o => o.name == (myCardName))[0]
        // quest: reorganize myCardExpansion
        // console.log(mainData)
        // console.log(myCardExpansion)

        // Fix cards that do not appear through our primary API (gatherers).
        // Y23 (and the like) may be from other sets - accommodate:
        if(myCardName.indexOf('Assemble the Team') != -1) {
          myCardExpansion = 'YBRO'
          forceGetImageUrl = 'https://cards.scryfall.io/large/front/8/a/8a28c1e8-1969-40bc-a6fb-5494b88eb9ac.jpg?1680464068'
        } else if(myCardName.indexOf("Kayla's Kindling") != -1) {
          myCardExpansion = 'YBRO'
          forceGetImageUrl = 'https://cards.scryfall.io/large/front/9/1/918e9597-3678-4e03-ae1e-9314291848d8.jpg?1680463978'
        } else if(myCardName.indexOf('Vesuvan Mist') != -1) {
          myCardExpansion = 'YDMU'
          forceGetImageUrl = 'https://cards.scryfall.io/large/front/f/0/f06c8847-f11f-40ad-aecf-36ca709b5ca0.jpg?1665000427'
        } else if(myCardName.indexOf('Rusko, Clockmaker') != -1) {
          myCardExpansion = 'YBRO'
          forceGetImageUrl = 'https://cards.scryfall.io/large/front/0/1/01b4c54e-7950-4183-a69d-39a777f424bc.jpg?1680464136'
        } else if(myCardName.indexOf('Clifftop Retreat') != -1) {
          myCardExpansion = 'ISD'
        } else if(myCardName.indexOf('Isolated Chapel') != -1) {
          myCardExpansion = 'OTC'
        } else if(myCardName.indexOf('Fractured Identity') != -1) {
          myCardExpansion = 'C17'
        } else if(myCardName.indexOf('Key to the Archive') != -1) {
          myCardExpansion = 'YMID'
        } else if(myCardName.indexOf('Furgul, Quag Nurturer') != -1) {
          myCardExpansion = 'YMKM'
          forceGetImageUrl = 'https://cards.scryfall.io/large/front/3/2/32e5ddf3-d132-408e-a082-6a3fcf19bfc8.jpg?1709528951'
        } else if(myCardName.indexOf('Loch Larent') != -1) {
          myCardExpansion = 'YWOE'
          forceGetImageUrl = 'https://cards.scryfall.io/large/front/c/d/cdfb0e9b-78bf-4e49-b8ab-f797a99d4505.jpg?1696890727'
        } else if(myCardName.indexOf('Three Steps Ahead') != -1) {
          forceGetImageUrl = 'https://cards.scryfall.io/large/front/8/f/8fffd839-2337-4a14-9312-cee085a17f4b.jpg?1712860611'
        }
        // else if(myCardName.indexOf('PASTE_NAME') != -1) {
        //   myCardExpansion = 'PASTE_EXPANSION'
        //   forceGetImageUrl = 'PASTE_URL'
        // }
        
        // myUniqueData = mainData[myCardExpansion].data.cards.filter((o:any) => o.name == (myCardName))[0] // matches EXACT name
        myUniqueData = mainData[myCardExpansion].data.cards.filter((o:any) => o.name.indexOf(myCardName) != -1)[0] // contains in its name


        // let myUniqueData = BROImportData.data.cards.filter(o => o.name == (myCardName))[0]

        // Additional direct/custom fixes (NaN fixes)
        //  (note: these may be specific to my use of the app)
        if(myCardName.indexOf('A-Visions of Phyrexia') != -1) {
          myUniqueData.identifiers.multiverseId = 583741
        } else if(myCardName.indexOf('A-Hall of Tagsin') != -1) {
          myUniqueData.identifiers.multiverseId = 583842
        } else if(myCardName.indexOf('Oko, the Ringleader') != -1) {
          myUniqueData.identifiers.multiverseId = 655164
        }

        mvid = parseInt(myUniqueData.identifiers.multiverseId!)

        // CHECK_FOR_NANS::
        if(isNaN(mvid)) {
        // // if(forceGetImageUrl != null) {} // if you want to supress warnings for handled cases.

          // console.log(`NAN!!! --- ${myCardName} ;;; multivserseid: [${myUniqueData.identifiers.multiverseId}]`)
          // console.log(myUniqueData)
          // console.log(myCardName)
        }

        myManaVal = myUniqueData.manaValue

        // Handle quantity of card.
        if(myUniqueData != null) {
          myUniqueData.__customCardQuantity = 1
          if(deckCardQuantities[myCardNameFull] != null) {
            myUniqueData.__customCardQuantity = deckCardQuantities[myCardNameFull]
          }
        }

      } catch (e) { 
        // console.log(myCardNameFull)

        console.log(`  -----------------------  `)
        console.log(`MISSING [mydata] mainData[myCardExpansion:: `)
        console.log(mainData[myCardExpansion])
        console.log(`MISSING [SET] -- ${myCardNameFull} -- ${myCardExpansion}`)
        // // console.log(e)

        let hasSetData = (mainData[myCardExpansion] != undefined) ? 'setAvail_noCard??' : 'NO_SET_AVAIL'
        return [`MISSING ${hasSetData} -- ${myCardNameFull}`, 19] 
        // return [`${myCardNameFull}`, 0] 
      }

      // [ ] Update to utilize different API - bigger default.json may be better (so that cards won't go missing when new patches arrive)
      let baseImageUrl = 'https://gatherer.wizards.com/Handlers/Image.ashx'
      let getGWUrl = (id:number) => `${baseImageUrl}?multiverseid=${id}&type=card`
      let finalGWUrl = getGWUrl(mvid)

      // if NaN - elevate
      if(isNaN(mvid)) {
        // // if(forceGetImageUrl != null) {} // if you want to supress warnings for handled cases.

        // finalGWUrl = `${finalGWUrl}&name=${myCardNameFull.replace(/ /g, '')}`
        finalGWUrl = `${baseImageUrl}?name=${encodeURIComponent(myCardName)}` // hmm failing by name on gatherers api
      }

      // Utilize scryfall API backup (e.g. https://scryfall.com/card/ybro/24/rusko-clockmaker)
      if(forceGetImageUrl != null) {
        finalGWUrl = forceGetImageUrl
      }

      return [finalGWUrl, myManaVal, myUniqueData]
    })

    // Loop through each card in deck to display on Angular front-end.
    myDeckSrcs.map((inData, i) => {
      let myQuantity = 1

      if(inData[2] != null) {
        // Set number of copies of this card for front-end.
        myQuantity = inData[2].__customCardQuantity || 1

        // Remove large, bloated foreign data (Although please return Japanese haha)
        if(inData[2].foreignData != null) {
          delete inData[2].foreignData
        }
      }

      // Add card object data to Angular.
      let newAngularDataObj = {
        src: inData[0].toString(),
        title: `${inData[0]} -- ${inData[1]}`,
        manaVal: inData[1],
        allData: JSON.stringify(inData[2], undefined, 2),
        quantity: myQuantity,
      }

      // Add to front-end objects.
      this.FEObjs.push(newAngularDataObj)
    })

  } // end initApp()

  // Main application constructor.
  constructor(private _broadcatser: BroadcasterService) {
    // app component broadasting
    this._broadcatser.broadcast('mykey', 'myvalue');
    //set dummy token just to enable auth guard for after-login module
    localStorage.setItem('token', 'dummy');

    /**
     * do this in other page, for e.g I'm doing here only
     * use this service with takeUntil from rxJS and local Subject to prevent memory leaks like shown
     */
    this._broadcatser
      .listen('mykey')
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data) => console.log(data), // your broadcasted value
      });

    // Initialize our Deck View 2 application.
    this.initApp()
  }

  /**
   * Opens a link in a new window.
   * 
   * @param destinationUrl {str} URL string to open.
   */
  openLink(destinationUrl: string){
    window.open(destinationUrl, '_blank')
  }

  /**
   * Creates a range from 0 to maxNum
   * @param number {Number} Max length of range.
   * @returns {Array<Number>} Array of numbers from 0 to maxNum.
   */
  createRange(maxNum:number){
    // return new Array(number);
    return [0, ...new Array(maxNum).fill(0)
      .map((n, index) => index + 1)]
  }

  // Angular destroy lifecycle hook.
  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
