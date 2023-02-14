import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { HttpClientModule} from '@angular/common/http';
import { PokemonService } from './pokemon.service';
import { HeaderPokedexComponent } from './header-pokedex/header-pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    PokemonCardComponent,
    HeaderPokedexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
