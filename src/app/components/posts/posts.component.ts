import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";
import { post } from "selenium-webdriver/http";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  imageBaseUrl: string = "http://lorempixel.com/200/200/people/";

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }
}
