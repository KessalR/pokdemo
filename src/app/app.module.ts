import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { PokedetailComponent } from './pokedetail/pokedetail.component';
@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokedetailComponent
  ],

  imports: [
  
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    BrowserAnimationsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
