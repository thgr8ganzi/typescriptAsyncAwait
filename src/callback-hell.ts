import { readFile} from "fs";

readFile('../package.json', (err: Error | null, data: Buffer) => {
    if (err) throw err;
    else{
        const content: string = data.toString();
        console.log(content);
    }
    readFile('./tsconfig.json', (err: Error | null, data: Buffer) => {
      if(err) throw err;
      else{
          const content: string = data.toString();
          console.log(content);
      }
    })
});