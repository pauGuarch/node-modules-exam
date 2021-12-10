import fs from 'fs';

// afegiu codi ... (2pto)
export class ManagerFs {
    constructor(_file) {
        //...
        this.file = _file;
    }
    getData() {
        //...
        return JSON.parse(fs.readFileSync(this.file, "utf-8"));
    }
}



