export default class PostService {
    static async fetchPostList(){
        return await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json());
    }
}