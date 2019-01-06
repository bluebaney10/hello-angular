import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Blue-Baney';
  private mUsername="Blue-Baney";
  private mPassword='1234';
  private mColor='#ff0000';
  private mFontSize="40px";

  mSpanColor="#FF0000";
  agreed=0;
  disagreed=0;
  voter=['Me','You','Him'];

  myMsg=""
  mEmail=""
  onClickReset(){
    this.myMsg="";
  }
  onVoted(agreed:boolean){
    agreed ? this.agreed++:this.disagreed++
  }

  onClick(){
   console.log('just do it')
  }

  onClickMe(event){
    window.alert("Event: "+event);
  }

  onMouseOver(){
    console.log('ON Mouse Over');
    this.mSpanColor="#FF0000"
  }

  onMouseOut(){
    console.log('ON Mouse Out');
    this.mSpanColor="#000000"
  }

  onKeyUp(message){
    console.log(message);
  }
  onKeyUpVerify(message){
    if(message=='blue'){
      window.alert("Bingo")
    }
  }

}
