import { FormControl, ValidationErrors } from "@angular/forms";

export class Luv2ShopValidators {

    static notOnlyWhitespace(controls: FormControl): ValidationErrors
    {
        if((controls.value != null ) &&(controls.value.trim().length ===0))
            {
                return {'notOnlyWhitespace': true};
            }

        else{
            return null;
        }
       
    }
}
