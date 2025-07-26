import { Component, OnInit, signal } from '@angular/core';
import { Ipost } from '../models/post.model';
import { Post } from '../services/post';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit {

  showform = false;
  posts = signal<Ipost[]>([]);

  newpost: Omit<Ipost, 'id'> = {
    date: new Date(),
    title: '',
    body: '',
    userid: 0,
    imgurl: '',
    like: false,
    likes: 0,
    comments: []
  };

  comment = '';

  constructor(private postService: Post) { }

  ngOnInit(): void {
    this.loadposts();
  }

  loadposts() {
    this.postService.getposts().subscribe({
      next: (posts) => this.posts.set(posts),
      error: (err) => console.error('Error loading posts:', err)
    });
  }

  toggleForm() {
    this.showform = !this.showform;
  }

  addpost() {
    this.postService.addpost(this.newpost).subscribe({
      next: (createdPost) => {
        this.posts.update(posts => [...posts, createdPost]);
        this.resetForm();
        this.showform = false;
      },
      error: (err) => console.error('Error adding post:', err)
    });
  }

  removepost(id: number) {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.posts.update(posts => posts.filter(post => post.id !== id));
      },
      error: (err) => console.error('Error deleting post:', err)
    });
  }

  likecounter(post: Ipost) {
    if (!post.like) {
      post.like = true;
      post.likes++;
      this.posts.update(posts => [...posts]);
    }
  }

  addcomment(post: Ipost) {
    if (this.comment.trim()) {
      post.comments.push(this.comment);
      this.comment = '';
      this.posts.update(posts => [...posts]);
    }
  }

  private resetForm() {
    this.newpost = {
      date: new Date(),
      title: '',
      body: '',
      userid: 0,
      imgurl: '',
      like: false,
      likes: 0,
      comments: []
    };
  }
}
