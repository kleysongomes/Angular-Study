import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  textButton = "Clique em Mim"
  nCount = 1
  lista = ["kley", "dev", "Angular"]

  constructor(private service: HelloWorldService){
    this.service.getHelloWorld().subscribe(
      {
        next: (data) => {
          console.log(data)
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log("Final")
        }
      }
    )
  }

  testeBtn(){
    console.log("Clicou aqui")
  }
}
