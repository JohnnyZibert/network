import profileReducer, {addPostAC, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}

    ],
}


it('length of post should be incremented', () => {
    let action = addPostAC("it-kamastra");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5)

});
it('message of new post should be correct', () => {
    let action = addPostAC("it-kamastra");
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("it-kamastra")
});
it('after deleted length of massage should be decrement', () => {
    let action = deletePost(1) ;
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3)
});

it('after deleted length of massage shouldn`t be incorrect', () => {
    let action = deletePost(1000) ;
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4)
});
