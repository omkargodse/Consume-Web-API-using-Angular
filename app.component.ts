import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements=[{type:'server',name:'Testserver',content:'Just test server'}];
  odds:number[]=[];
  evenNumbers:number[]=[];
  fiveData:number[]=[];

  onServerAdded(serverData:{serverName:string,serverContent:string}){  
    this.serverElements.push({
    type:'server',
    name:serverData.serverName,
    content:serverData.serverContent
  });
}

  onBlueprintCreated(blueprintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    });
  }

  onGameStarted(firedNumber:number){
      if(firedNumber%2==1)
        this.odds.push(firedNumber);
      else
        this.evenNumbers.push(firedNumber);

      console.log('Fired Number '+firedNumber);     
  }

  onFiveStarted(firedFive:number){
      this.fiveData.push(firedFive);
  }
}
