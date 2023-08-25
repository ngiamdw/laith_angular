import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemName = '';
  members: string[] = [];
  err= '';
  numOfTeams: number | '' = '';
  teams: string[][] = [];

  onInput(member: string){
    this.newMemName = member;
    console.log(this.newMemName);
  }

  addMember() {

    if(!this.newMemName){
      this.err = "Name cannot be empty";
      return
    }
    this.members.push(this.newMemName);
    this.newMemName = '';
    this.err = '';
    console.log(this.members);
  }

  onTeamNumInput(num: string){
    this.numOfTeams = Number(num);
  }
  generateTeam(){
    if(!this.numOfTeams || this.numOfTeams <= 0){
      this.err = "invalid number of teams input";
      return;
    }
    if(this.members.length < this.numOfTeams){
      this.err = "Not enough members";
    }

    const allMembers = [...this.members]
    this.err = '';

    while(allMembers.length){
      for(let i = 0; i < this.numOfTeams; i++){
        const ranIdx = Math.floor(Math.random() * allMembers.length);
        const mem = allMembers.splice(ranIdx,1)[0];
        console.log(ranIdx);
        if(!mem) {
          break;
        }
  
        if(this.teams[i]){
          this.teams[i].push(mem);
        }
        else{
          this.teams[i] = [mem];
        }
        console.log(this.teams);
      }
    }
    this.numOfTeams = '';
    this.members = [];
  }
}
