import { FormGroup, ValidatorFn, AbstractControl } from "@angular/forms"

export class ValidatorsService {
  /**
   * Walk the currentMessages object tree following the dot delimited controlPath string to retrieve a validation message.
  */
  static getErrorMessage(currentMessages: any, controlPath: string) {
    const controlPaths = controlPath.split(".")

    let messageNode: any =
      controlPaths.reduce((messages: any, path: string) =>
        messages && messages[path] ? messages[path] : null,
        currentMessages
      )

    return messageNode
      ? (Object.values(messageNode) as string[])[0] //= Return the 1st object property
      : "" //= messages node not found for target control
  }

  /**
   * Walks formGroup tree and check for errors that appear in the preset validationMessages object, and accumulates the messages in the currentMessages object.
   * Accumulate errors in currentMessages 
   * @Param formGroup: Target form group to search
   * @Param validationMessages: All preset validation error messages in the same object structure as the formGroup
   * @Param currentMessages: Use for accumulation of current error messages and recursion of formGroup type container controls.  Object structure mirrors that of formGroup
  */
  static processMessages(
    formGroup: FormGroup,
    validationMessages: object,
    currentMessages: object = {}
  ): any {
    Object.entries(formGroup.controls).forEach(([ctrlKey, control]) => {
      if (!validationMessages[ctrlKey]) return //==> no validation messages defined

      if (control instanceof FormGroup) {
        currentMessages[ctrlKey] = this.processMessages(
          control, validationMessages[ctrlKey], currentMessages[ctrlKey]
        )

      } else {
        if (!control.errors) return //==> no errors

        currentMessages[ctrlKey] = Object.keys(control.errors)
          .reduce((errors: object, errType) => {
            if (!!validationMessages[ctrlKey][errType]) { 
              //==> Found corresponding message, so accumulate it
              errors[errType] = validationMessages[ctrlKey][errType]
            }
            
            return errors
          }, {})
      }
    })

    return currentMessages
  }


  /**
   * Return a validation function that will return a range error object 
   * if control value is non-null and not a number between min and max params
   */
  static range(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null =>
      (c.value && isNaN(c.value) || c.value < min || c.value > max)
        ? { range: true } //= mark as an error
        : null
  }
}
