function getWallpaper()
{
    var arr=[];
    arr.push("https://wallpaperaccess.com/full/2255783.jpg");
    arr.push("https://www.quirkybyte.com/wp-content/uploads/2017/11/dementors-harry-potter-1024x683.jpg");
    arr.push("https://i.pinimg.com/originals/f3/c2/ab/f3c2abcab851070353b21edf2277ca1f.jpg");
    return arr;
}
var counter=0;
function movenext()
{
    var i=document.getElementsByClassName("image").src;
    var arr=getWallpaper();
    if(counter>=0 && counter<arr.length)
    {
        document.getElementsByClassName("image").src=arr[counter];
        counter++;
    }
    
}
function print()
{
    document.write("Hello World");
}