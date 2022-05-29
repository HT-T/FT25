import { useState, useEffect } from "react";

import { useAuth } from './hooks/useAuth';
import PageLogin from './pages/PageLogin';
import PageTodo from './pages/PageTodo';

export default function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <PageTodo /> : <PageLogin />}</div>
};
