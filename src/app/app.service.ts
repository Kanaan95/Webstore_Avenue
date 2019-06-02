import { Injectable } from "@angular/core"
import { Http, RequestOptions, Headers } from "@angular/http"
import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/observable/throw";
import * as internalError from "./shared/errors/internal-error";
import { NotFoundError } from "./shared/errors/not-found-error";
import { BadInput } from "./shared/errors/bad-input";
import { Unauthorized } from "./shared/errors/unauthorized-error";

@Injectable()
export class AppService {

    private url = "http://localhost:3000/";

    constructor(private http: Http) { }

    getAll(ressource?) {
        if (ressource) return this.http.get(this.url + "/" + ressource).catch(this.handleError);
        else return this.http.get(this.url).catch(this.handleError);
    }

    post(urlPath, ressource) {
        return this.http.post(this.url+urlPath, ressource).catch(this.handleError);
    }

    delete(type, ressource) {
        return this.http.delete(this.url + type + "/" + ressource).catch(this.handleError);
    }

    get(type) {
        return this.http.get(this.url + type).map(
            response => response.json()
        ).catch(this.handleError);
    }

    update(type, ress) {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.url + type, ress, options).catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status == 500)
            return Observable.throw(new internalError.AppInternalError)

        if (error.status == 404)
            return Observable.throw(new NotFoundError)

        if (error.status == 400)
            return Observable.throw(new BadInput)

        if (error.status == 403)
            return Observable.throw(new Unauthorized)

        return Observable.throw(new Error)
    }
}
