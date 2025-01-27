import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {
  public listaPensamentos = [
    {
      conteudo: 'Passo informação para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Mauris ultricies orci quis nisl suscipit, vel ullamcorper erat commodo. Praesent mattis ante felis, vel feugiat arcu faucibus sed. Vivamus quam velit, pulvinar sit amet dui et, varius aliquet lectus. Sed et augue risus. Nunc vitae mattis lectus, sed vehicula est.',
      autoria: '',
      modelo: 'modelo1'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
