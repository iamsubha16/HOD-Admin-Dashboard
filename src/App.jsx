import React from 'react'

import Home from './Pages/Home/Home'
import Login from "./Pages/Login/Login"
import Single from "./Pages/Single/Single"
import List from "./Pages/List/List"
import New from "./Pages/New/New"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { productInput, userInput } from './formSource'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInput} title="Add New User" />} />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInput} title="Add new Product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
