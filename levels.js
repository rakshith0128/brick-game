// function buildLevel(game, level){
// let bricks= [];

// level.forEach((row,rowIndex) => {
//     row.forEach((brick, brickIndex) =>{
//         if(brick === 1){
//             let postion = {
//                 x:100 * brickIndex,
//                 y:75 + 30*rowIndex
//             };
//             bricks.push(new Brick(game,postion));
//         }
//     });

// });
// return bricks;
// }

// const level1 = [
//    // [0,0,0,0,0,1,1,0],
//     //[1,1,1,1,1,1,1,1],
//     //[1,1,1,1,1,1,1,1] ,
//     [0,0,0,0,0,1,0,0]
// ];
//  const level2 = [
//     [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//   ];


 function buildLevel(game, level) {
    let bricks = [];
  
    level.forEach((row, rowIndex) => {
      row.forEach((brick, brickIndex) => {
        if (brick === 1) {
          let position = {
            x: 100 * brickIndex,
            y: 75 + 24 * rowIndex
          };
          bricks.push(new Brick(game, position));
        }
      });
    });
  
    return bricks;
  }
  
 const level1 = [
    // [0, 1, 1, 0, 0, 0, 0, 1],
    // [1, 1, 1, 1, 1, 1, 1, 1],
    // [1, 1, 1, 1, 1, 1, 1, 1],
    // [1, 1, 1, 1, 1, 1, 1, 1]
    [0, 0, 0, 0, 0, 0, 0, 1]
  ];
  
 const level2 = [
   [0, 0, 0, 0, 0, 0, 0, 1 ],
//    [1, 1, 1, 1, 1, 1, 1, 1],
//    [1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1]
  ];

  const level3 = [
    [1, 0, 1, 0, 1, 0, 1,0],
    [0, 1, 0, 1, 0, 1, 0,1],
    [1, 0, 1, 0, 1, 0, 1,0],
    [0, 1, 0, 1, 0, 1, 0,1 ]
];

//pyramid
const level4 = [
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0], 
    [1, 1, 1, 1, 1, 1, 1, 1],
];

//specs
const level5 = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1]
];