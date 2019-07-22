import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material/material.module";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostFormComponent } from "./components/post-form/post-form.component";

import { PostService } from "./services/post.service";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { CardComponent } from './components/shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostFormComponent,
    ToolbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
