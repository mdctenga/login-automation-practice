import { APIRequestContext, expect } from "@playwright/test";

export class PostsAPI {
  readonly request: APIRequestContext;
  readonly baseURL = 'https://jsonplaceholder.typicode.com';
  
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getPostsByPostId(postId: number) {
    const response = await this.request.get(`${this.baseURL}/posts/${postId}`);
    expect(response.status()).toBe(200);
    return response.json();
  }
};