import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private messageService:MessageService) { }

  log(action: string , data: any){
    console.log("Log." + action + ": Status: " + data.status + " | Message: " + data.message);
  }

  showError(message: string) {
    this.messageService.add({key: 'messager', severity: 'error', summary: "Error", detail: message});
  }

  showSuccess(message:string){
    this.messageService.add({key: 'messager', severity: 'success', summary: "Erfolg", detail: message});
  }

  showInfo(message:string){
    this.messageService.add({key: 'messager', severity: 'info', summary: "Info", detail: message});
  }

  showWarn(message:string){
    this.messageService.add({key: 'messager', severity: 'warn', summary: "Warnung", detail: message});
  }
}
