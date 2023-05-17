import {surpriseMePrompts} from "../constants"
//this is for save file like photo, library
import FileSaver from "file-saver"
export function getRendomPrompt(prompt){

    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length );
    const randomPrompt = surpriseMePrompts [randomIndex];
    
    if(randomPrompt===prompt) return getRendomPrompt(prompt)

    return randomPrompt;
}
 
// this function is going to use for download image
export async function downloadImage(_id, photo){
  FileSaver.saveAs(photo,`download-${_id}.jpg`)
}