// import { Hello } from "./Hello";
import React from "react";
import { Container } from "./Container";
import { TodoList } from "./TodoList";
// import { Counter } from "./Counter";
// import { ClickTracker } from "./ClickTracker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { UncontrolledLogin } from "./UncontrolledLogin";

// const todos = [
//   { id: 1, title: "Call Katherine about the trip", completed: false },
//   { id: 2, title: "Buy tickets", completed: true },
//   { id: 3, title: "Finish the presentation", completed: false },
//   { id: 4, title: "Invite John", completed: true },
//   { id: 5, title: "Rent a car", completed: false },
// ];

export class App extends React.Component {
  // defaultLoginStatus = {
  //   status: "failure!",
  // };

  render() {
    return (
      <Container title="My App Title">
        {/* <Hello /> */}
        {/* <Counter
          initialValue={0}
          incrementAmount={2}
          incrementInterval={1000}
        /> */}
        {/* <ClickTracker /> */}
        {/* <InteractiveWelcome /> */}
        {/* <Login login="test" /> */}
        {/* <UncontrolledLogin login={this.defaultLoginStatus} /> */}

        <TodoList
          // items = this.state.item
          render={(items, handleEvent) => {
            console.log(items);
            // console.log(handleEvent);
            return (
              <ul>
                {items.map((item, index) => (
                  <li key={item.id}>
                    {item.title}
                    <button
                      className="remove_buttons"
                      // onClick={() => this.handleClickRemoveButton(index)}
                      onClick={() => handleEvent(index)}
                      // onClick={(e) => {
                      //   this.handleClickRemoveButton(e.target);
                      // }}
                    >
                      Remove the Item
                    </button>
                  </li>
                ))}
              </ul>
            );
          }}
        ></TodoList>

        {/* Second Way */}
        {/* <TodoList
        // items = this.state.item
        >
          {(items, handleEvent) => {
            console.log(items);
            // console.log(handleEvent);
            return (
              <ul>
                {items.map((item, index) => (
                  <li key={item.id}>
                    {item.title}
                    <button
                      className="remove_buttons"
                      // onClick={() => this.handleClickRemoveButton(index)}
                      onClick={() => handleEvent(index)}
                      // onClick={(e) => {
                      //   this.handleClickRemoveButton(e.target);
                      // }}
                    >
                      Remove the Item
                    </button>
                  </li>
                ))}
              </ul>
            );
          }}
        </TodoList> */}
      </Container>
    );
  }
}
