import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

// tslint:disable-next-line:one-line
export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string) {
        return value.replace(character, ' ');
    }

// tslint:disable-next-line:eofline
}