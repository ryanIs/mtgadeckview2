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
1 Tezzeret, Betrayer of Flesh (NEO) 84
1 Chandra, Awakened Inferno (M20) 127
1 Jace, the Perfected Mind (ONE) 57
1 The Wandering Emperor (NEO) 42
1 Underrealm Lich (GRN) 211
1 The Eternal Wanderer (ONE) 11
2 Snow-Covered Forest (KHM) 284
1 Liliana of the Veil (DMU) 97
1 Chandra, Hope's Beacon (MOM) 134
1 Wrenn and Realmbreaker (MOM) 217
1 Teferi, Who Slows the Sunset (MID) 245
1 Invasion of New Phyrexia (MOM) 239
1 Kaya, Spirits' Justice (MKM) 211
1 Kaya, Intangible Slayer (ONE) 205
1 Furgul, Quag Nurturer (Y24) 23
1 Pool of Vigorous Growth (J21) 28
1 Tamiyo, Compleated Sage (NEO) 238
1 Fractured Identity (OTP) 45
1 Temporary Lockdown (DMU) 36
1 Tribute to the World Tree (MOM) 211
1 The Enigma Jewel (LCI) 55
1 Invasion of Arcavios (MOM) 61
1 One with the Multiverse (BRO) 59
1 Invasion of Innistrad (MOM) 115
1 Sheoldred (MOM) 125
1 Virtue of Persistence (WOE) 115
1 Brass's Tunnel-Grinder (LCI) 135
1 Urabrask's Forge (ONE) 153
1 A-Visions of Phyrexia (BRO) 156
1 Conduit of Worlds (ONE) 163
1 Spirit-Sister's Call (NEO) 237
1 Invasion of Tolvada (MOM) 241
2 Buried in the Garden (MKM) 191
3 Colossal Skyturtle (NEO) 216
1 Agatha's Soul Cauldron (WOE) 242
3 Collector's Vault (WOE) 244
1 Karn's Sylex (DMU) 234
1 Matzalantli, the Great Door (LCI) 256
1 Old Rutstein (VOW) 244
1 The Celestus (MID) 252
1 Dollhouse of Horrors (VOW) 255
1 Chimil, the Inner Sun (LCI) 249
1 Portal to Phyrexia (BRO) 240
1 Sunken Citadel (LCI) 285
2 Conduit Pylons (OTJ) 254
1 Sokenzan, Crucible of Defiance (NEO) 276
1 Argoth, Sanctum of Nature (BRO) 256
1 Shatterskull Smashing (ZNR) 161
1 Restless Anchorage (LCI) 280
1 Restless Fortress (WOE) 259
1 Defense of the Heart (WOT) 51
1 Restless Reef (LCI) 282
1 Tarnation Vista (BIG) 30
1 Restless Vents (LCI) 284
1 Restless Cottage (WOE) 258
1 Hengegate Pathway (KHM) 260
1 Rockfall Vale (MID) 266
1 A-Hall of Tagsin (BRO) 263
1 Blast Zone (BRO) 258
1 Echoing Deeps (LCI) 271
4 Field of Ruin (MID) 262
4 Public Thoroughfare (MKM) 265
1 Pit of Offerings (LCI) 278
1 Scene of the Crime (MKM) 267
1 Mirrex (ONE) 254
1 The Mycosynth Gardens (ONE) 256
1 Volatile Fault (LCI) 286
1 Bojuka Bog (WWK) 132
4 Khalni Garden (J21) 121
1 Invasion of Fiora (MOM) 114
1 Werefox Bodyguard (WOE) 39
1 Depopulate (SNC) 10
3 No Witnesses (MKM) 27
1 Settle the Wreckage (XLN) 34
1 Sunfall (MOM) 40
1 Farewell (NEO) 13
1 Virtue of Knowledge (WOE) 76
1 Peer into the Abyss (M21) 117
1 River's Rebuke (XLN) 71
1 Jin-Gitaxias, Progress Tyrant (NEO) 59
1 Vesuvan Mist (Y23) 7
1 Ritual of Soot (GRN) 84
1 Terror Tide (LCI) 127
1 Angel of Suffering (SNC) 67
1 Gix's Command (BRO) 97
1 Shigeki, Jukai Visionary (NEO) 206
1 Breach the Multiverse (MOM) 94
1 The Elder Dragon War (DMU) 121
3 Rite of Oblivion (MID) 237
1 Faithful Mending (MID) 221
1 Assemble the Team (Y23) 17
1 Squirming Emergence (LCI) 241
2 Urgent Necropsy (MKM) 240
2 Unburial Rites (SIS) 36
2 Doppelgang (MKM) 198
1 Rocco, Cabaretti Caterer (SNC) 218
1 Reclamation Sage (M19) 196
1 Atraxa, Grand Unifier (ONE) 196
1 Golos, Tireless Pilgrim (M20) 226
1 Surtland Frostpyre (KHM) 271
1 Captain Sisay (INV) 237
1 Shadows' Verdict (ZNR) 124
1 Storm's Wrath (THB) 157
1 Mesmeric Orb (BRR) 31
1 Chromatic Lantern (BRR) 10
1 Rusko, Clockmaker (Y23) 24
1 Key to the Archive (Y22) 59
1 Hostage Taker (XLN) 223
2 Snow-Covered Plains (KHM) 277
2 Snow-Covered Swamp (KHM) 281
2 Snow-Covered Mountain (KHM) 283
2 Snow-Covered Island (KHM) 278
1 Littjara Mirrorlake (KHM) 264
1 Tough Cookie (WOE) 193
1 Stroke of Midnight (WOE) 33
1 The Everflowing Well (LCI) 56
1 Hoarding Broodlord (MOM) 110
4 Escape Tunnel (MKM) 261
1 Timeless Witness (MH2) 179
1 Aftermath Analyst (MKM) 148
1 Oko, the Ringleader (OTJ) 223
1 The World Tree (KHM) 275
1 Three Steps Ahead (OTJ) 75
1 Etali, Primal Conqueror (MOM) 137
1 A-The One Ring (LTR) 246
1 Mythos of Illuna (IKO) 58
1 Ruthless Lawbringer (OTJ) 229
1 Buried Ruin (JMP) 491
1 Aetherflux Reservoir (KLR) 217
1 Insatiable Avarice (OTJ) 91
1 Demonic Bargain (VOW) 103
1 Darkslick Shores (ONE) 250
3 Port of Karfell (KHM) 265
1 Nykthos, Shrine to Nyx (THS) 223
1 Nahiri's Resolve (MAT) 37
1 Invasion of Kaldheim (MOM) 145
1 Moon-Blessed Cleric (AFR) 26
1 Springbloom Druid (MH1) 181
1 Ghostly Prison (SPG) 19
1 Brokers Hideout (SNC) 248
1 Razorverge Thicket (ONE) 257
2 Inspiring Vantage (OTJ) 269
3 Blooming Marsh (OTJ) 266
1 Spirebluff Canal (OTJ) 270
1 Cragcrown Pathway (ZNR) 261
1 Reliquary Tower (M19) 254
1 Copperline Gorge (ONE) 249
1 Sulfur Falls (DAR) 247
2 Dragonskull Summit (XLN) 252
1 Timely Reinforcements (M12) 40
1 Bovine Intervention (OTJ) 6
1 A-Dawnbringer Cleric (HBG) 87
1 Triumphant Getaway (Y24) 27
1 Radiant Fountain (M21) 248
1 A-Lier, Disciple of the Drowned (MID) 59
1 Moritte of the Frost (KHM) 223
1 Lórien Revealed (LTR) 60
1 Yavimaya Coast (DMU) 261
1 Brushland (BRO) 259
1 Llanowar Wastes (BRO) 264
1 Battlefield Forge (BRO) 257
3 Caves of Koilos (DMU) 244
1 Sulfurous Springs (DMU) 256
1 Shivan Reef (DMU) 255
1 Drowned Catacomb (XLN) 253
1 Glacial Fortress (XLN) 255
1 Isolated Chapel (DAR) 241
1 Woodland Cemetery (DAR) 248
1 Rootbound Crag (XLN) 256
1 Clifftop Retreat (DAR) 239
1 Sunpetal Grove (XLN) 257
1 Hinterland Harbor (DAR) 240
1 Invasion of Zendikar (MOM) 194
1 Invasion of New Capenna (MOM) 238
1 The Eldest Reborn (DAR) 90
1 Dedicated Dollmaker (Y24) 2
1 Binding the Old Gods (KHM) 206
1 Spara's Headquarters (SNC) 257
1 Karn's Bastion (WAR) 248
1 Xander's Lounge (SNC) 260
1 Crawling Sensation (SIR) 191
1 Storm of Saruman (LTR) 72
1 Displacer Kitten (HBG) 115
1 Teferi's Time Twist (WAR) 72
1 Primeval Titan (M11) 192
1 Cryptic Coat (MKM) 50
1 Tear Asunder (DMU) 183
1 Sun Titan (M11) 35
1 Ravenous Chupacabra (RIX) 82
1 Meticulous Excavation (BRO) 16
1 Phyrexian Scrapyard (Y23) 30
1 Fierce Empath (M21) 181
1 Sunscorched Desert (AKR) 331
1 Titans' Nest (IKO) 212
1 Axgard Armory (KHM) 250
1 Emergence Zone (WAR) 245
1 Herald of Vengeance (Y22) 2
1 Drannith Ruins (MAT) 50
1 Porcine Portent (Y24) 23
1 Roxanne, Starfall Savant (OTJ) 228
1 Tome of the Infinite (J21) 13
1 Doubling Season (WOT) 52
1 Memorial to Folly (DAR) 242
1 Journey to Eternity (RIX) 160
1 Etali's Favor (LCI) 149
1 Impetuous Lootmonger (Y24) 12
1 Signature Spells (HBG) 37
1 Weave the Nightmare (Y24) 29
1 Teferi's Protection (STA) 11
1 Scrollshift (MOM) 34
1 Into the Fire (MOM) 144

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

  searchFilterKeyPressEvent(evt: any) {
    if(evt.key == 'Enter') {
      this.console.log(evt)
      // Objective: perform filter on FE
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
        }else if(myCardName.indexOf('Key to the Archive') != -1) {
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
