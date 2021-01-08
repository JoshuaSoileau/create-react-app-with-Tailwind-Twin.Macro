/* eslint-disable no-restricted-globals */
import React from "react";
import { GlobalStyles } from "twin.macro";
import { ExampleProvider } from "./providers/ExampleProvider";

function App() {
  return (
    <ExampleProvider>
      <GlobalStyles />

      {/* Actual markup goes here */}
      <div tw="h-screen flex items-center justify-center bg-gray-900">
        <h1 tw="text-white text-xl  rounded-lg  p-12  bg-gray-700">
          This is a creat-react-app with Tailwind and Twin.Macro!
        </h1>
      </div>
    </ExampleProvider>
  );
}

export default App;
