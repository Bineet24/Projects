var inquirer = require('inquirer'); 
const cp=require('child_process') 
function displayDetails(){
inquirer
  .prompt([
    {
        type :'list',
        name:'Selection',
        choices:['About','Skills','Projects','Academics']

    }
  ])
  .then((choices) => {  
      if(choices.Selection=='About'){
          console.log(`I am Bineet 
          Sharma `)
          displayNext()
      }
      else if(choices.Selection=='Skills'){
          console.log('Java','JavaScript','NodeJs','HTML')
          displayNext()
      } 
      else if(choices.Selection=='Projects'){   
          cp.execSync('Start chrome ')
          displayNext()
      } 
      else if(choices.Selection=='Academics'){
          cp.execSync('calc')
          displayNext()
      }
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
displayDetails()

function displayNext(){
    var inquirer = require('inquirer');
inquirer
  .prompt([ 
      {
        type :'list',
        name:'Goback',
        choices:['back']
      }
    
  ])
  .then((choice) => {   
      if(choice.Goback=='back'){
          displayDetails()
      }
    
  })
}