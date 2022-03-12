const Discord = require('discord.js');
//const { link } = require('ffmpeg-static');
const client = new Discord.Client();
const prefix = '';
const format = ['png','gif','mov','jpg','jpeg','mp4']

const googler = ['amogus','among','a m o g u s','sus','sussy','imposter','amog',
'crewmate','s u s','am0ng','amongus','amonugs', 'amon']


client.once('ready', () => {
    console.log('online');

    client.user.setPresence({ activity: { name: '&help' }, status: 'online' })
  
});


// main deleting message code
client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);

  var fs = require('fs')

  var data = fs.readFileSync("amogdetect.txt", 'utf8')
  var data2 = fs.readFileSync("allowed.txt", 'utf8')
  var textByLine = data.split("\n")
  var textByLine2 = data2.split("\n")



  var filter1 = message.content.replace(/[-_. ]/g,'');
  var filter2 = filter1.replace(/[        ⠀ ]/g,'')
  



  console.log(filter2)

  


  let foundInText = false;  

  for (var i in textByLine) {
    for (var c in textByLine2) 
   if (filter2.toLowerCase().includes(textByLine2[c]))
   return;
    if (filter2.toLowerCase().includes(textByLine[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    message.delete();
 
 

    console.log('killed', message.content)
  }



});



// used to add stupid stupid words i hate tjis dsdso much AFSDASgFFDSH

client.on('message', message =>{
  if(message.author.bot) return;
  if (message.content.startsWith('&add ')) {

    if (!message.member.roles.cache.has('842724071107461151')) {
      message.channel.send('sorry buddy, invalid perms, use !apply if you want access')
      return;

    }
  
    var ret = message.content.replace('&add ','');
    var fs = require('fs')
    var data = fs.readFileSync("amogdetect.txt", 'utf8')

  if (data.includes(ret)) {
  message.channel.send(ret + " is already in the list thanks")
  return;
  }

  fs.appendFileSync("amogdetect.txt","\n");

    fs.appendFileSync("amogdetect.txt", ret);

    message.channel.send('added '+ ret + ' to the cringe words list')
    


  }


});


/*

// remove code when i get less lazy
client.on('message', message =>{
  if(message.author.bot) return;
  if (message.content.startsWith('&remove ')) {

    if (!message.member.roles.cache.has('842724071107461151')) {
      message.channel.send('sorry buddy, invalid perms, use !apply if you want access')
      return;

    }
  
    var ret = message.content.replace('&remove ','');
 
    var fs = require('fs')

    var data = fs.readFileSync("amogdetect.txt", 'utf8')

  if (!data.includes(ret)) {
  message.channel.send(ret + " is not in the list, you bald?")
  return;
  }

  var data = fs.readFileSync('amogdetect.txt', 'utf-8');

  var linesExceptFirst = data.split('\n').slice(1).join('\n');
    fs.writeFileSync('amogdetect.txt', linesExceptFirst);


    message.channel.send('removed ' + ret)
    


  }


});
*/

// Used to give words the cool kids pass and let them be used (&allow)
client.on('message', message =>{
  if(message.author.bot) return;
  if (message.content.startsWith('&allow ')) {

    if (!message.member.roles.cache.has('842724071107461151')) {
      message.channel.send('sorry buddy, invalid perms, use !apply if you want access')
      return;
    }
  
    var ret = message.content.replace('&allow ','');
    var fs = require('fs')
    var data = fs.readFileSync("allowed.txt", 'utf8')

  if (data.includes(ret)) {
  message.channel.send(ret + " is already in the list thanks")
  return;
  }

  fs.appendFileSync("allowed.txt","\n");

    fs.appendFileSync("allowed.txt", ret);
  
    message.channel.send('added '+ ret + ' to the free pass list, welcome to the cool kids')
    
  }


});


// Used to display amogdetect.txt
client.on('message', message =>{
  if(message.author.bot) return;
  if (message.content.startsWith('&list')) {

    if (!message.member.roles.cache.has('843095688434286602')) {
      message.channel.send('sorry buddy, invalid perms')
      return;
    }
    var fs = require('fs')

  var data = fs.readFileSync('amogdetect.txt', 'utf8')

  message.channel.send(data);




  }

  });
  
  // the help command, what more is there to say
  client.on('message', message =>{
    if(message.author.bot) return;
    if (message.content.startsWith('&help')) {

      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('commands')
      .setDescription('**&allow** (insert words you can use)' + "\n" + "**&add** (words you can't use)" + "\n" + "**&allowed** see all of the allowed words" + "\n" + "**&help** see this thing")
  
    message.channel.send(exampleEmbed);

    }
  
  });
// use to show list of allowed words
  client.on('message', message =>{
    if(message.author.bot) return;
    if (message.content.startsWith('&allowed')) {
  
      if (!message.member.roles.cache.has('842724071107461151')) {
        message.channel.send('sorry buddy, invalid perms')
        return;
      }
      var fs = require('fs')
  
    var data = fs.readFileSync('allowed.txt', 'utf8')
  
    message.channel.send(data);
  
  
  
  
    }
  
    });

// used to delete edited messages.
client.on('messageUpdate', (oldMessage, newMessage) => {
if(!newMessage.content.startsWith(prefix) || newMessage.author.bot) return;

  const args = newMessage.content.slice(prefix.length).split(/ +/);

  var fs = require('fs')
  var data = fs.readFileSync("amogdetect.txt", 'utf8')
  var data2 = fs.readFileSync("allowed.txt", 'utf8')
  var textByLine = data.split("\n")
  var textByLine2 = data2.split("\n")

  let foundInText = false;
//console.log(textByLine)
  for (var i in textByLine) {
    for (var c in textByLine2) 
   if (newMessage.content.toLowerCase().includes(textByLine2[c]))
   return;
    if (newMessage.content.toLowerCase().includes(textByLine[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    newMessage.delete();
    console.log('killed', newMessage.content)
  }



});

// Gets uploaded images.
client.on('message', message =>{
  if(message.author.bot) return;

  if (message.attachments.size > 0)
    message.attachments.forEach(Attachment => {
      let imgUrl = Attachment.url
      console.log(Attachment.url)
     // message.channel.send(Attachment.url) &&
      // message.channel.send('Attachment Detected')
      
      const reverseImageSearch = require('reverse-image-search-google')

        const doSomething = (results) => {
        var textify = JSON.stringify(results);
    
        textify = textify.toLowerCase();

         console.log(results)
         console.log(textify)
         for (let i = 0; i < googler.length; i++) {
         if (textify.includes(googler[i])) {
          console.log('located the unfunny')
          message.delete();
         }
        }
        }
        reverseImageSearch(Attachment.url, doSomething)
        

    })

});

// Gets links of images.
client.on('message', message =>{
  if(message.author.bot) return;
  if (message.content.includes('https://')) {
    for (var i in format) { 
      if (message.content.toLowerCase().includes(format[i].toLowerCase())){
       // message.channel.send('Link Detected') 
       // message.channel.send(message.content)

        const reverseImageSearch = require('reverse-image-search-google')

        const doSomething = (results) => { //stupid

        var textify = JSON.stringify(results);

          textify = textify.toLowerCase();
        
          console.log(results)
          console.log(textify) 
  
          for (let i = 0; i < googler.length; i++) {
            if (textify.includes(googler[i])) {
              console.log('located the unfunny')
              message.delete();
         }
          }
        }
        reverseImageSearch(message.content, doSomething) //stupid 
        {
      
        
        
        
         
        }
      }
     }

    } 

});

// Detects emojis and gets lonk
client.on('message', message =>{
  if (message.content.includes('<:')) {
    //console.log(message.content)
    let regex = message.content.match(/\d+/g) 
   // console.log(regex)
    let emojiUrl = 'https://cdn.discordapp.com/emojis/'+regex+'.png?v=1'
    console.log(emojiUrl)

    const reverseImageSearch = require('reverse-image-search-google')

        const doSomething = (results) => {
        var textify = JSON.stringify(results);
        
        textify = textify.toLowerCase();

         console.log(results)
         console.log(textify)


         for (let i = 0; i < googler.length; i++) {
         if (textify.includes(googler[i])) {
          console.log('located the unfunny')
          message.delete();
         }
        }
        }
        reverseImageSearch(emojiUrl, doSomething)
        {

        }

      }

    

  

});

// used to delete embeds
client.on('message', message =>{
  if (message.author.bot) 
  return;
for(var a = 0; a < message.embeds.length; a++) 
    if (message.embeds[a].title == null) {
      break;
    } else {
  const args = message.embeds[a].title.slice(prefix.length).split(/ +/);

  var fs = require('fs')

  var data = fs.readFileSync("amogdetect.txt", 'utf8')
  var data2 = fs.readFileSync("allowed.txt", 'utf8')
  var textByLine = data.split("\n")
  var textByLine2 = data2.split("\n")

  let foundInText = false;
  for (var i in textByLine) {
    for (var c in textByLine2) 
   if (message.embeds[a].title.toLowerCase().includes(textByLine2[c]))
   return;
    if (message.embeds[a].title.toLowerCase().includes(textByLine[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    message.delete();
    console.log('killed', message.embeds[a].title)
  }

    }

});

client.login(token)
