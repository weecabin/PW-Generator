

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
  
  const opts = 
  [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0987654321",
  "}{][^<>!?&$+;:#@]}"
  ]
  
  //print("opt="+opt)
  let pw=""
  let used = ""
  for (i=0;i<len;i++)
  {
    let index = Math.round(Math.random()*(opt.length-1))
    if (opt.length>0 && used.length>=0 && used.length!=opt.length)
    {
      while(used.indexOf(index)>=0)
      {
        index=Math.round(Math.random()*(opt.length-1))
        //print("trying index="+index)
      }
      //print("test index="+index+" used indexes="+used)
    }
    if (used.indexOf(index)==-1)
      used+=index
    //print("index="+index+" used indexes="+used)
    pw+=opts[index][Math.round(Math.random()*(opts[index].length-1))]

    //print(pw)
  }
  return pw;
}
