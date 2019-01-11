/*the script by revenge or bowlingtoolkit in github 
so please dont share this code without the copyrights
Github: https://github.com/Bowlingtoolkit
give me a star 🌟 if you like my projects and follow me daily codes !
need some codes/selfbots ? join this server https://discord.gg/8JcbqDx its alpha codes but the name changed to narox
soon i will upload antijoin its anti to the accounts created less than you set in the code
*/

/*
NOTE: I'm irresponsible if the tokens have been banned because of the miners
USE THIS SCRIPT AT YOUR OWN RISK!
*/
//the start of consts
const Discord = require("discord.js");//discord.js lib required in this code !
const client = new Discord.Client();//new client
const config = require('./config.json')//required config.json
const prefix = config.tokens//the prefix in config.json file
//the end of consts

//the start of loading msgs ..
console.log(`                                                                                                        
  ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______ 
 /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/                                                                                                      

 ▒█▀▀█ █▀▀█ █▀▀ █▀▀▄ ░▀░ ▀▀█▀▀ █▀▀ 
 ▒█░░░ █▄▄▀ █▀▀ █░░█ ▀█▀ ░░█░░ ▀▀█ 
 ▒█▄▄█ ▀░▀▀ ▀▀▀ ▀▀▀░ ▀▀▀ ░░▀░░ ▀▀▀ 
 
  ▒█▀▄▀█ ░▀░ █▀▀▄ █▀▀ █▀▀█ 
  ▒█▒█▒█ ▀█▀ █░░█ █▀▀ █▄▄▀                                                                      
  ▒█░░▒█ ▀▀▀ ▀░░▀ ▀▀▀ ▀░▀▀                                                                           
  ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______ 
 /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/ 
`)

console.log(`Loading`);
console.log(`Loading.`);
console.log(`Loading..`);
console.log(`Loading...`);

//end of loading msgs

client.on('ready', () => {//start of ready event
    //ready console msg code

   console.log(`----------------`);
   console.log(`Credit Farmer - Script By : Bowlingtoolkit (Revenge)`);
   console.log(`----------------`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
   console.log(`Users: ${client.users.size}`);
   console.log(`----------------`);
   console.log(`Channels: ${client.channels.size}`)
   console.log(`----------------`);
   console.log(`Servers: ${client.guilds.size}`);
   console.log(`----------------`);
   console.log(`All Rights Reserved To Bowlingtoolkit`);
   console.log(`----------------`);
   console.log(`NOTE: I'm irresponsible if the tokens have been banned because of the miners !`)
   console.log(`----------------`);
   console.log(`USE THIS SCRIPT AT YOUR OWN RISK!`)
   console.log(`----------------`);
   if(config.speed > 120000) {console.log("The Minimum Speed Is 120000, If This Gets Abused Your Selfbots Might Get Banned [USE THIS AT YOUR OWN RISK!]");}

   //the msgs ^
});//end of ready event

//end of ready console msg code

client.on('message', message => {//start of msg event
    if(message.content === `${prefix}daily`) {//the cmd
        message.channel.send('#daily')
    }//to get the daily 
});//end of msg event

//end of msg event
client.on('message', message => {//start of msg event 
    if(message.content === `${prefix}credits`) {//the cmd
        message.channel.send('#credits')
    }//to view the credits
});//end of msg event

//end of rep code

client.on('message', message => {//start of msg event
    let mention = message.mentions.users.first()//mention rule
    if(message.content === `${prefix}rep`) {//the cmd
        if(!mention) return message.channel.send('Mention The Target')//if he not written the mention return with this msg
        message.channel.send(`#rep ${mention}`)
    }//to give someone a rep
});//end of msg event

//end of rep code

//start of spamming code
client.on('ready', () => { //the start ready event
    let channel = 'channel id'//the channel id here
    let guild = 'server id'//the server id here
    var ms = config.speed;//The Speed In config.json [The Time Lapse Sending Msgs (If You Make It Faster, The Tokens Will Be Banned More Quickly)]
    setInterval (function () {
          //the msg will spamming
      client.guilds.get(guild).channels.get(channel).send(`**Credit Farmer by Bowlingtoolkit Credit Farmer by Bowlingtoolkit Credit Farmer by Bowlingtoolkit Credit Farmer by Bowlingtoolkit Credit Farmer by Bowlingtoolkit **[ " ${x} " ]`)
      //the msg will spamming ^    
    }, ms); 
          })
          
        
        //the end of ready event

//end of spamming code

//disconnect console msg code

//the start of disconnected event
client.on('disconnect', () => console.log(`
Miner Disconnected !
`));//the end of disconnect event

//the end of disconnect console msg code

//the start of reconnect event

//reconnecting console msg code

//the start of reconnecting event
client.on('reconnecting', () => console.log(`
Miner Reconnecting ..
`));//the end of reconnecing event

//the end of reconenct console msg code

//the start of warn event
client.on('warn', console.warn);
//the end of warn event

//the start of error event
client.on('error', console.error);
//the end of error event

client.login(config.tokens);//login on the selfbot tokens
//the tokens must be written in config.json file