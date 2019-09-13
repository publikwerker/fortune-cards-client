import { deckReducer } from '../../src/reducers/index.js';
import { reset, 
  trim_deck, 
  set_deck, 
  take_query } from '../../src/actions/index.js';

describe('deckReducer', () => {
  it('Should set the intitial state when nothing is passed in', () => {
    const state = deckReducer(undefined, {});
    expect(state).toEqual({
      showInfo: true,
      history: [],
      spreadNumber: 0,
      cardsDealt: [],
      deck: [
        {
          id: '0',
          name: 'fool',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        }, 
        {
          id: '1',
          name: 'magus',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '2',
          name: 'heirophant',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '3',
          name: 'empress',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '4',
          name: 'emperor',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '5',
          name: 'fifth',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '6',
          name: 'sixth',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '7',
          name: 'seventh',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '8',
          name: 'eighth',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '9',
          name: 'ninth',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '10',
          name: 'wheel of fortune',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
      ]
      });
  });

  it('Should return the current state on an unknown action', () => {
    const state = deckReducer(undefined, {type: 'UNKNOWN'});
    expect(state).toEqual({
      showInfo: true,
      spreadNumber: 0,
      cardsDealt: [],
      history: [],
      deck: [
        {
          id: '0',
          name: 'fool',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        }, 
        {
          id: '1',
          name: 'magus',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '2',
          name: 'heirophant',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '3',
          name: 'empress',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '4',
          name: 'emperor',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '5',
          name: 'fifth',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '6',
          name: 'sixth',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '7',
          name: 'seventh',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '8',
          name: 'eighth',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '9',
          name: 'ninth',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
        {
          id: '10',
          name: 'wheel of fortune',
          desc: 'lorem ipsum',
          img: 'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w',
          facing: 0,
        },
      ]
      });
  });

  it('Should handle the reset function', () => {
    const oldState = {
      spreadNumber: 2,
      textQuery: 'why',
      cardsDealt: [{id: "king", desc:"long lived"}],
    };
    const expected = [];
    const state = deckReducer(oldState, reset());
    expect(state.spreadNumber).toEqual(0);
    expect(state.textQuery).toEqual(null);
    expect(state.cardsDealt).toEqual(expect.arrayContaining(expected));
  });

  it('Should handle the trim_deck function', () => {
    const values = 3;
    const state = deckReducer(undefined, trim_deck(values));
    expect(state.spreadNumber).toEqual(values);
  });

  it('Should handle the set_deck function', () => {
    const deck = [
      {
        id:'Water of Air',
        name:'Mother of Swords',
        desc:`The Mother of Swords is also commonly know by the name the Queen of Swords or the Queen of Spades. The Mother card represents Binah (Understanding), the third Sephira, in the suit of Air. 
        Binah, called the Great Mother, sits atop the left side of the Tree of Life, the Receptive, Passive, and “Female” side. The Mother of Swords is the feminine, receptive complement to The Father of Swords. (In no way do I advocate strictly male/female relationships in society, and neither did Crowley. These titles represent natural forces. For every gift there is an implied reception.) 
        Binah is also known as the Great Sea, and she is ruled by the planet Saturn. There is some resonance between this card and the Three of Swords, The Lord of Sorrow.
        Yod represented the active element of Fire. Here, Heh represents the receptive element of Water. She receives, ferments, and transmits the original energy of the Yod. The Mother of Swords represents the watery part of Air: its vibrations, Water’s elasticity, and its power of transmission. She is the “clear, conscious perception of Idea, the Liberator of the Mind.” 
        In the I Ching, the watery part of Air is described by the 28th Hexagram Ta Kuo, Proponderance of the Great.
        The Mother of Swords rules the Zodiac in the transition from Virgo to Libra. Anyone born with their Sun or Ascendent in the last third of Virgo or the first two thirds of Libra is ruled by the Mother of Air.
        The person signified by this card is intensely perceptive, observant, individualistic, confident, graceful, gracious, and just, or else sly, deceitful, unreliable, and dangerously beautiful.`,
        img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5776085229b582bc9425/1549752419024/mother+of+air.jpg?format=500w',
        facing: 0,
      },
      {
        id:'Air of Air',
        name:'Son of Swords',
        desc:`This card is also variously known as the Jack of Spades as well as the Prince or Knight of Swords.  
        Representing the Vau of Tetragrammaton, the Son corresponds with Tipareth (Beauty), the sixth Sephira. As the third letter of the Name, the Son also corresponds with the third element, Air. 
        The Son of Air represents the airy part of Air: the intellectual Mind, “easy enough to move, but quite unable to progress in any definite direction except by accident.” The airy part of Air is also represented by Clouds, as steady conveyers of water.
        In the I Ching, the airy part of Air is described by Sun, The Gentle, The Penetrating, Wind, the 57th Hexagram.
        Tipareth symbolizes not only the Son, but the Sun, as well. There is some resonance between this card and the Six of Swords, The Lord of Science.
        The Son of Air rules the Zodiac in the transition from Capricorn to Aquarius. Any person who is born with their Sun or Ascendent in the last third of Capricorn or the first two thirds of Aquarius is ruled by the Son of Swords.
        A person signified by such a card should be purely intellectual, full of jumbled ideas, intensely clever, rational, but unstable of purpose, and indifferent to even their own ideas. They reduce everything to unreality “by removing its substance and transmuting it to an ideal world of ratiocination which is purely formal and out of relation to any facts, even those upon which it is based.” `,
        img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f579e971a1829e8f28fb5/1549752437385/son+of+air.jpg?format=500w',
        facing: 0,
      },
      {
        id:'Earth of Air',
        name:'Daughter of Swords',
        desc:`The Daughter of Swords is also known as the Princess or Page of Swords.She has no equivalent in decks of playing cards. Like the Mother, this is a strongly Feminine card. The Daughters’ purpose is to differentiate source Energy, to gather it, and to transmit it to the Aces of their element. She attracts a spirit to form a body. They are placed so that “a refined matter may attract its like, and the spiritual forces may not lose themselves in the void”.
        As the final letter in the Name, the Final Heh has a strong affinity to the first letter, Yod. In fact, the relationships between these cards are so strong that each implies the other. Once the cycle is complete, it is renewed. Heh occupies Malkuth (Kingdom), which is the tenth and bottom-most Sephira (Emanation) and represents Earth and the Earthly Plane. There is some resonance between the Daughter of Swords and the Ten of Swords, The Lord of Ruin.
        The Daughter is the twin of the Son. She is the final manifestation of Air, and she represents the earthy part of Air, the materialization of Idea and the influence of Heaven on Earth. She represents the anger of the Gods -- on the order of the Valkyrie and the Gorgon.
        In the I Ching, the earthy part of Air is described by the 18th Hexagram Ku, Work on What Has Been Spoiled, Decay, which Crowley names “the most unhappy symbol in the book”.
        Although they have no correlation with the Zodiac, the Daughters rule the sky over the Earth in quadrants moving eastward from the Great Pyramid. The Daughter of Air rules the Americas.
        A person signified by the Daughter of Swords is dexterous in managing controversial affairs and in settling controversies. She is stern, vengeful, clever, firm, aggressive, and possesses a destructive logic. `,
        img:'https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/5c5a0d17eef1a12d338ba784/5c5f5640971a1829e8f2824d/1549752354269/daughter+of+air.jpg?format=500w',
        facing: 0,
      },]
    const state = deckReducer(undefined, set_deck(deck));
    expect(state.deck).toEqual(deck);
  });

  it('Should handle the take_query function', () => {
    const textQuery = 'why not?';
    const state = deckReducer(undefined, take_query(textQuery));
    expect(state.textQuery).toEqual(textQuery);
  });
});