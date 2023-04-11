import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  med1: string = "Medida de entrada";
  med2: string = "Medida de saída";
  value: number = 0;
  calc()
  {
    try
    {
      if(this.med1 == "Medida de entrada" || this.med2 == "Medida de saída")
        throw("Selecione as medidas!");

      if(this.med1 == this.med2)
        throw("Não é possível converter uma medida em si mesma!");

      let m1 = this.med1;
      let m2 = this.med2;
      let v = this.value;
      var r = 0;

      if(m1 == "cm")
      {
        if(m2 == "m")
        {
          r = v / 100;
        }
        else
        {
          r = v / 100000;
        }
      }
      else
      {
        if(m1 == "m")
        {
          if(m2 == "cm")
          {
            r = v * 100;
          }
          else
          {
            r = v / 1000;
          }
        }
        else
        {
          if(m1 == "km")
          {
            if(m2 == "m")
            {
              r = v * 1000;
            }
            else
            {
              r = v * 100000;
            }
          }
        }
      }
      alert("Resultado: " + r);

    }
    catch(e)
    {
      alert("Erro -> " + e);
    }
  }
}
