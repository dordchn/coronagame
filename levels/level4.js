import Player from '../entities/player.js';
import Obstacle from '../entities/obstacle.js';
import Piece from '../entities/piece.js';
import Seller from '../entities/seller.js';

// Rendered from './level4.lvl'

export default () => {
  return {
    player: new Player(/*x=*/ 140, /*y=*/ 530, /*rotation=*/ 0),
    obstacles: [
      new Obstacle(80, 556, 120, 20, { color: 'black' }), // Entrance
      new Obstacle(934, 420, 30, 120, { color: '#ddd' }), // Desk

      new Obstacle(584, 0, 440, 80, { src: 'res/imgs/vegetables.png' }), // Vegetables
      new Obstacle(418, 226, 100, 300, { src: 'res/imgs/freezer-90.png' }), // Freezer

      new Obstacle(578, 134, 220, 44),
      new Obstacle(534, 354, 176, 44),
      new Obstacle(94, 354, 176, 44),
      new Obstacle(182, 266, 176, 44),
      new Obstacle(974, 266, 50, 176),
      new Obstacle(446, 0, 44, 178),
      new Obstacle(314, 354, 44, 176),
      new Obstacle(0, 398, 50, 176),
      new Obstacle(50, 178, 132, 44),
      new Obstacle(886, 222, 44, 132),
      new Obstacle(754, 310, 44, 132),
      new Obstacle(578, 442, 44, 132),
      new Obstacle(314, 134, 44, 132),
      new Obstacle(226, 442, 44, 132),
      new Obstacle(182, 0, 44, 134),
      new Obstacle(0, 0, 50, 134),
      new Obstacle(710, 486, 88, 44),
      new Obstacle(798, 442, 88, 44),
      new Obstacle(666, 266, 88, 44),
      new Obstacle(50, 266, 88, 44),
      new Obstacle(754, 178, 88, 44),
      new Obstacle(974, 134, 50, 88),
      new Obstacle(842, 310, 44, 88),
      new Obstacle(666, 398, 44, 88),
      new Obstacle(270, 46, 44, 88),
      new Obstacle(622, 530, 44, 44),
      new Obstacle(358, 486, 44, 44),
      new Obstacle(182, 442, 44, 44),
      new Obstacle(50, 442, 44, 44),
      new Obstacle(182, 310, 44, 44),
      new Obstacle(534, 266, 44, 44),
      new Obstacle(798, 222, 44, 44),
      new Obstacle(666, 222, 44, 44),
      new Obstacle(578, 178, 44, 44),
      new Obstacle(270, 178, 44, 44),
      new Obstacle(490, 134, 44, 44),
      new Obstacle(402, 134, 44, 44),
      new Obstacle(94, 134, 44, 44),
      new Obstacle(490, 46, 44, 44),
      new Obstacle(358, 46, 44, 44),
      new Obstacle(138, 46, 44, 44),
    ],
    items: [
      new Piece(248, 22, 40, 'res/imgs/items/paper.svg'),
      new Piece(732, 104, 40, 'res/imgs/items/carrot.svg'),
      new Piece(292, 244, 40, 'res/imgs/items/bread.svg'),
      new Piece(732, 200, 40, 'res/imgs/items/avocado.svg'),
      new Piece(732, 420, 40, 'res/imgs/items/milk.svg'),
      new Piece(688, 508, 40, 'res/imgs/items/juice.svg'),

    ],
    viruses: [
      new Piece(248, 68, 40, 'res/imgs/virus.svg'),
      new Piece(644, 112, 40, 'res/imgs/virus.svg'),
      new Piece(820, 332, 40, 'res/imgs/virus.svg'),
      new Piece(732, 552, 40, 'res/imgs/virus.svg'),

    ],
    customers: [],
    seller: new Seller(990, 480), // Seller
    exit: new Obstacle(844, 556, 120, 20, { color: 'black' }), // Exit
  };
};