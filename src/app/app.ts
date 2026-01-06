import { Component } from '@angular/core';

import { Flores } from './components/flores/flores';
import { Peluches } from './components/peluches/peluches';
import { Ramos } from './components/ramos/ramos';
import { CajasDulces } from './components/cajas-dulces/cajas-dulces';
import { Festividades } from './components/festividades/festividades';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Flores,
    Peluches,
    Ramos,
    CajasDulces,
    Festividades
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
