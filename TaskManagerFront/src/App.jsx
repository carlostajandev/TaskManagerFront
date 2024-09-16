import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './ui/views/auth/Login';
import { AuthContextProvider } from './aplication/contexts/AuthContext';
import { User } from './ui/views/dashboard/User';
import { Task } from './ui/views/dashboard/Task';
import Layout from './ui/views/dashboard/Layout';
import { UserCreate } from './ui/views/components/UserCreate';
import { UserEdit } from './ui/views/components/UserEdit';
import { UserDelete } from './ui/views/components/UserDelete';
import { TaskCreate } from './ui/views/components/Taskviews/TaskCreate';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path='dashboard' element={<Layout />}>
              <Route path='user' element={<User />} />
              <Route path='user/create' element={<UserCreate />} />
              <Route path='user/edit/:id' element={<UserEdit />} />
              <Route path='user/delete/:id' element={<UserDelete />} />
              <Route path='task' element={<Task />} />
              <Route path='task/create' element={<TaskCreate/>} />
              <Route path='task/edit/:id' element={<TaskCreate/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

    </AuthContextProvider>
  );
}

export default App;
