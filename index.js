const jsonfile = require('jsonfile');
const moment = require('moment');
const random = require('random');
const simpleGit = require('simple-git'); 
const FILE_PATH = './data.json';
const makecommit = n=>{
    if(n===0) return simpleGit().push()  ;  
    const x =random.int(0,50);
    const y = random.int(0,6);
    const DATE = moment().subtract(1,'y').add(1,'d')
    .add(x, 'w').add(y, 'd').format();
    const data = {date: DATE};
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, ()=>{simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}, 
    makecommit.bind(this, --n))});
}

makecommit(500);


