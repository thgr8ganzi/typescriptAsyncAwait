import {readFileSync, readFile} from 'fs';
import ErrnoException = NodeJS.ErrnoException;

// package.json 파일을 동기 방식으로 읽는 예
console.log('read package.json using synchronous api...');
const buffer: Buffer = readFileSync('../package.json');
console.log(buffer.toString());

readFile('./package.json',(err: ErrnoException | null, data: Buffer)=>{
    console.log('read package.json using asynchronous api...');
    console.log(buffer.toString());
})
// Promise 와 async/await 를 사용한 비동기 처리
const readFilePromise = (filename:string):Promise<string> => {
    return new Promise<string>((resolve, reject)=>{
        readFile(filename,(err: ErrnoException | null, data: Buffer)=>{
            if(err){
                reject(err);
            }else{
                resolve(buffer.toString());
            }
        })
    })
}
(async ()=>{
    const content = await readFilePromise('../package.json');
    console.log('read package.json using Promise and async/await...');
    console.log(content);
})