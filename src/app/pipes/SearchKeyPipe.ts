import { Pipe, PipeTransform } from '@angular/core';
import { Utility } from '../utils/Utility';


@Pipe({
    name: 'searchKeyFilter',
    pure: true
})
export class SearchkeyPipe implements PipeTransform {
    // input additionalDetails or receivedDetails array with key to search
    transform(inputArray: string[], searchkey: string): string[] {
        console.log("pipe triggered:" ,  searchkey);

        if (Utility.isArrayNullOrEmpty(inputArray)) {
            console.log("input is empty");
            return [];
        }
        if(Utility.isStringNullorEmpty(searchkey)) {
            console.log("search key empty");
            return inputArray;
        }
        
        
        let foundKeysArray: string[] = inputArray.filter((ele: string) => ele.toUpperCase().includes(searchkey.toUpperCase()));
        foundKeysArray = (Utility.isArrayNullOrEmpty(foundKeysArray)) ? [] : foundKeysArray;
        console.log("lengh after search :", foundKeysArray.length);
        return foundKeysArray;
    }

}