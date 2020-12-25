function pw()
{
  
  let options = document.getElementById("lower").checked?"3":"";
  options += document.getElementById("upper").checked?"4":"";
  options += document.getElementById("numbers").checked?"1":"";
  options += document.getElementById("symbols").checked?"2":"";
  options+=","+ document.getElementById("length").value;
  alert(options)
  let newpw = PwGen(options);
  document.getElementById("result").innerHTML= newpw;
}

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
  "-%=/\}{][^<>!?&$+;:#@]}"
  ]
  
  //print("opt="+opt)
  let pw=""
  let used = ""
  for (i=0;i<len;i++)
  {
    // make sure we get at least one character 
    // from each group of specified strings
    let index = Math.round(Math.random()*(opt.length-1))
    if (opt.length>0 && used.length>=0 && used.length!=opt.length)
    {
      // find an unused index
      while(used.indexOf(index)>=0)
      {
        index=Math.round(Math.random()*(opt.length-1))
        //print("trying index="+index)
      }
      //print("test index="+index+" used indexes="+used)
    }
    // only save the index if it hasnt been used
    if (used.indexOf(index)==-1)
      used+=index
    //print("index="+index+" used indexes="+used)
    // pull a random character out of the selected group 
    // and add it to the password
    pw+=opts[index][Math.round(Math.random()*(opts[index].length-1))]

    //print(pw)
  }
  return pw;
}
