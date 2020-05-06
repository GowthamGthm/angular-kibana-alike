export class Utility {

    public static clearFormdataValues(fdPoseDetection: FormData): FormData {
        return new FormData();
    }

    public static isArrayNullOrEmpty(array: any[]): boolean {
        if (array === undefined || array.length === 0) {
            return true;
        }
        return false;
    }

    public static isStringNullorEmpty(str: string): boolean {
        if (str === undefined || str === '') {
            return true;
        }
        return false;
    }


    public static isObjectNullorEmpty(obj: any): boolean {
        if (obj === undefined)  {
            return true;
        }
        if (obj === null || obj === '') {
            return true
        }
        return false;
    }
   
    public static getRandomInteger(): number {
        let array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0];
    }
}