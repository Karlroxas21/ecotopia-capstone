import { ElementRef, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'

@Injectable({
        providedIn: 'root'
})

export class AdminCase4Service{

        private urlAPI = `${environment.apiUrl}admin-case-4`
        private baseUrlAPI = `${environment.apiUrl}`;

        constructor(private http: HttpClient){}

        getData(): Observable<any>{
                return this.http.get<any>(this.urlAPI);
        }

        updateData(data: any): Observable<any>{
                const _id = data._id;
                const json = {
                        header: data.header,
                        header_description: data.header_description,
                        title: data.title,
                        cases: data.cases,
                        case4_content: data.case4_content,
                        references: data.references, 
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json);
        }

        imageCase4Upload(image: FormData, fileInput: ElementRef): void{
                this.http.post(`${this.baseUrlAPI}image-case4-upload`, image, { responseType: 'text' as 'json'}).subscribe(
                        (res) =>{
                                fileInput.nativeElement.value = '';
                        },(err) =>{
                                console.error(err);
                        }
                )
        }
}