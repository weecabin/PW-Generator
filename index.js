

const prompt = 
"Enter any combination of the following\n\
1:numbers\n\
2:symbols\n\
3:lowercase\n\
4:uppercase\n\
5:noduplicates\n\
comma length ex 14,10\n\
> "

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const print = (msg) => {
  console.log(msg);
}

process.stdout.write(prompt
)
rl.on('line', (line) => {
  var options = line.replace(/\0/g, '')
  //console.log(options)
  print(PwGen(options))
})

function PwGen(options)
{
  let splitoptions= options.split(",")
  let opt=splitoptions[0];
  let len=splitoptions[1];
  const lower="abcdefghijklmnopqrstuvwxyz"
  const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers="0987654321"
  const symbols="}{][^<>!?&$+;:#@]}"
  
  //print("opt="+opt)
  var pw=""
  for (i=0;i<len;i++)
  {
    let typeindex=0
    let type=opt;
    if (opt.length>1)
    {
      typeindex=Math.round(Math.random()*(opt.length-1))
    }
    //print("typeindex="+typeindex)
    type=opt[typeindex]
  
    //print("type="+type)
   
    switch (type)
    {
      case "1":
      pw+=numbers[Math.round(Math.random()*(numbers.length-1))]
      break;
      
      case "2":
      pw+=symbols[Math.round(Math.random()*(symbols.length-1))]
      break;
      
      case "3":
      pw+=lower[Math.round(Math.random()*(lower.length-1))]
      break;
      
      case "4":
      pw+=upper[Math.round(Math.random()*(upper.length-1))]
      break;
    }
    //print(pw)
  }
  return pw;
}
