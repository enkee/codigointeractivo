import { Component, OnInit, Input } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  categorias: any = [
    { "codigo": 0, "texto": "Todos" },
    { "codigo": 1, "texto": "Politica" },
    { "codigo": 2, "texto": "Educacion" },
    { "codigo": 3, "texto": "Seguridad" }
  ];

  informacion: any = [
    { codigo: 1, Nombre: "Diego Sebastian ", Apellido: "Herrera", sueldo: 1500.52 },
    { codigo: 2, Nombre: "Enrique Palomino ", Apellido: "Horna", sueldo: 3500.5 },
    { codigo: 3, Nombre: "Fernando Horna ", Apellido: "Palomino", sueldo: 2500.7 },
    { codigo: 4, Nombre: "Miguel Marquez ", Apellido: "Horna", sueldo: 1500 },
  ]

  temporal: any;

  noticias: any = [
    {
      "categoria": {
        "codigo": 1,
        "texto": "Politica"
      },
      "titulo": "prueba de titulo",
      "texto": "prueba de texto",
      "imagen": "https://smoda.elpais.com/wp-content/uploads/images/201512/molly_bair__8417.jpg"
    },

    {
      "categoria": {
        "codigo": 2,
        "texto": "Politica"
      },
      "titulo": "prueba de titulo",
      "texto": "prueba de texto",
      "imagen": "https://smoda.elpais.com/wp-content/uploads/images/201512/molly_bair__8417.jpg"
    },

    {
      "categoria": {
        "codigo": 1,
        "texto": "Politica"
      },
      "titulo": "prueba de titulo",
      "texto": "prueba de texto",
      "imagen": "https://smoda.elpais.com/wp-content/uploads/images/201512/molly_bair__8417.jpg"
    },

    {
      "categoria": {
        "codigo": 2,
        "texto": "Politica"
      },
      "titulo": "prueba de titulo",
      "texto": "prueba de texto",
      "imagen": "https://smoda.elpais.com/wp-content/uploads/images/201512/molly_bair__8417.jpg"
    },

  ];

  @Input("propiedadbody") datobody: any;

  constructor(private route: ActivatedRoute, private router:Router) {
    this.temporal = this.noticias;
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      if(params["id"]!=null){
        console.log('llego con el parametro id ' + params["id"] +"  "+ params["titulo"]);
      }
    });
  }

  eventoControl(evento) {
    if (evento.target.value == 0) {
      this.noticias = this.temporal;

    } else {
      this.noticias = this.temporal.filter((item) => {
        return item.categoria.codigo == evento.target.value;
      });
    }
  }

}
