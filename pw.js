function pw()
{
  let options = "";
  options = buildOption(options, document.getElementById("lower"),"1");
  options = buildOption(options, document.getElementById("upper"),"2");
  options = buildOption(options, document.getElementById("numbers"),"3");
  options = buildOption(options, document.getElementById("symbols"),"4");
  options+=","+ document.getElementById("length").value;
  //alert(options);
  let newpw = PwGen(options);
  //alert(newpw);
  document.getElementById("result").innerHTML= newpw;

}

function copy() {
  /* Get the text field */
  var copyText = document.getElementById("copy").innerHTML;

  /* Select the text field */
  copyText.select(); 
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText);
}

function buildOption(options,checkbox,newoption)
{
  //alert(checkbox.checked);
  if (checkbox.checked==true)
    options+=newoption;
  //alert(options);
  return options;
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
