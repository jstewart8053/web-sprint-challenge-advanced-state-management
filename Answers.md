1. What problem does the context API help solve?
   Helps us manage components and props throughout the Application.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Actions contain info about what kind of action to perform. Reducers are the functions that take instructions. Sotore is the object that holds the state off the application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application State- is what you want to hold out the whole application, like a memory database stored. Component state is a specific component and can only be changed within the component and down to children using props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux Thunk lets action creators call functions instead of an object, which shows async actions

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   I'm honestly happy with anything I can understand. That question is kind of like asking whats your favorite form of torture.
