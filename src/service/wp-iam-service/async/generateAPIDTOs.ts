import { parse } from '@asyncapi/modelina/node_modules/@asyncapi/parser/lib';
import { TypeScriptGenerator } from '@asyncapi/modelina';
import * as fs from 'fs';
import { exit } from 'process';

const serviceName = "wp-iam-service"
console.log("Running API paylod(dto) generation script for " + serviceName);
const generatedRootDir = "src/api/dto/"+serviceName+"/";

if(fs.existsSync(generatedRootDir)) {
    fs.rmSync(generatedRootDir,{recursive : true});
}

fs.mkdirSync(generatedRootDir,{recursive : true});


const file = fs.readFileSync('src/service/wp-iam-service/async/asyncapi.yaml', 'utf-8');

const generator = new TypeScriptGenerator();

export async function generate(): Promise<void> {
    try {
        const parsedDoc = await parse(file, {path:"src/service/wp-iam-service/async/"});
        const models = await generator.generate(parsedDoc as any);
        console.log("models generated in memory.");
        for (const model of models) {
            console.log("generating dto file: " + generatedRootDir + model.modelName+".ts");
            fs.writeFileSync(generatedRootDir + model.modelName + ".ts", model.result);
        }
    } catch (error) {
        console.log("enrror orrcurred while generating api dto files for "+serviceName+"..exiting the build process:" + error);
        exit(1);
    }
};

generate();

