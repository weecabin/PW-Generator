

const prompt = 
"Enter any combination of the following\n\
1:lowercase\n\
2:uppercase\n\
3:numbers\n\
4:symbols\n\
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
  //print(randomchar(line))
})

function PwGen(options)
{
  let splitoptions= options.split(",")
  let opt=splitoptions[0];
  let len=splitoptions[1];
  
  const opts = 
  [
  "abcdefghijkmnopqrstuvwxyz",
  "ABCDEFGHJKLMNOPQRSTUVWXYZ",
  "0987654321",
  "-%=/\}{][^<>!?&$+;:#@]}"
  ]
  
  //print("opt="+opt)
  let pw=""
  let used = ""
  for (i=0;i<len;i++)
  {
    // make sure we get at least one character 
    // from each group of specified strings
    let index = randomchar(opt);
    if (opt.length>1 && used.length>0 && used.length!=opt.length)
    {
      // find an unused index
      while(used.indexOf(index)>=0)
      {
        index=randomchar(opt);
        //print("is "+index+" in "+used)
      }
      //print("using "+index) 
    }
    // only save the index if it hasnt been used
    if (used.indexOf(index)==-1)
      used+=index
    //print("index="+index+" used indexes="+used)
    // pull a random character out of the selected group 
    // and add it to the password
    pw+=opts[index-1][Math.round(Math.random()*(opts[index-1].length-1))]

    //print(pw)
  }
  return pw;
}

function randomchar(source)
{
  //print(source)
  let index=Math.round(Math.random()*(source.length-1));
  //print(index)
  return source[index]
}
