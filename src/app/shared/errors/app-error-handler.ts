import { ErrorHandler, Component } from '@angular/core'


@Component({
    selector: 'app-error-handler',
    template: './app-error-handler.html',
})

export class AppErrorHandler extends ErrorHandler {

    constructor() {
        super();
    }
    handleError(error) {
       alert('An unexpected error has occured');
       console.log(error)
    }

}