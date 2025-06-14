var platformTextEnglish; //THE ENGLISH VERSION OF THE WORD
var platformTextJapanese; //THE JAPANESE VERSION OF THE WORD
var platform; //THE WORD
var platformSpeed = 3; //THE WORD VELOCITY
var maxPlatforms = 20; //MAX PLATFORMS TO PREPARE
var platformsArray = []; //STORES ALL PLATFORMS IN A ARRAY
var activePlatforms = 0; //PLATFORMS CURRENTLY ON THE SCREEN
var maxActivePlatforms = 1; //MAX PLATFORMS ON THE SCREEN

const booksData = {
  Essentials: [
    ["ringo", "apple"],
    ["mizu", "water"],
    ["denwa", "phone"],
    ["pan", "bread"],
    ["kutsu", "shoes"],
    ["うち", "house"],
    ["ひと", "person"],
    ["かばん", "bag"],
    ["ねこ", "cat"],
    ["いぬ", "dog"]
  ],
  Travel: [
    ["hikouki", "airplane"],
    ["hoteru", "hotel"],
    ["densha", "train"],
    ["kuukou", "airport"],
    ["pasupooto", "passport"],
    ["ちず", "map"],
    ["たくしー", "taxi"],
    ["ばす", "bus"],
    ["りょこう", "travel"],
    ["がいこくご", "foreign language"]
  ],
  Nature: [
    ["ki", "tree"],
    ["kawa", "river"],
    ["yama", "mountain"],
    ["hana", "flower"],
    ["sora", "sky"],
    ["うみ", "sea"],
    ["もり", "forest"],
    ["たいよう", "sun"],
    ["つき", "moon"],
    ["かぜ", "wind"]
  ]
};


function translatePlatform() //TOGGLES THE WORD TO JAPANESE OR ENGLISH
{
  if (translationToggle == 0) { //**** ENGLISH ***//
    platform.textContent = platformTextEnglish; 
    platform.setAttributeNS(null,"fill",englishFontColor); //FILLCOLOR
    platform.setAttributeNS(null, "stroke", englishFontColor);

  } else { //**** JAPANESE ***//
    platform.textContent = platformTextJapanese;
    platform.setAttributeNS(null,"fill",japaneseFontColor); //FILLCOLOR 
    platform.setAttributeNS(null, "stroke", japaneseFontColor);
  }
}

function setPlatform() {
  const words = booksData[bookMenuName];
  let randomInt = getRandomInt(words.length); 
  let randomIntHeight = getRandomInt(50) + 1;
  let heightVariation = (randomIntHeight + (h / 3));

  platform.setAttributeNS(null, "y", heightVariation);

  platformTextJapanese = words[randomInt][0];
  platformTextEnglish = words[randomInt][1];

  bookLength = words.length;

  if (translationToggle == 0) {
    platform.textContent = platformTextJapanese;
    platform.setAttributeNS(null, "fill", japaneseFontColor);
  } else {
    platform.textContent = platformTextEnglish;
    platform.setAttributeNS(null, "fill", englishFontColor);
  }

  platform.position.y = h / 10;
  platform.position.x = w / 1.5;

  activePlatforms += 1;
}


function changePlatformSpeed() //ADJUST WORD SPEED BASED ON THE SETTINGS SLIDER
{    
  platformSpeed = document.getElementById("speedSlider").value;
  platform.velocity = { x: platformSpeed, y: 0 }; //VELOCITY OF THE PLATFORM
}

function changePrimaryPlatformLanguage() //SWITCHES JAPANESE AND ENGLISH BOOLEAN
{
  if (translationToggle == 0) { //**** JAPANESE ***//
    translationToggle = 1;
  } else { //**** ENGLISH ***//
    translationToggle = 0;
  }
}