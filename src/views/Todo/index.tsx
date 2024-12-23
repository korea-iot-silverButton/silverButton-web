import React, { useEffect, useState } from 'react'
import { Task } from '../../types';
import '../../styles/Main.css';
import Clock from '../../Components/Clock';
import ProgressBar from '../../Components/ProgressBar';
import TaskForm from '../../Components/TaskForm';
import TaskList from '../../Components/TaskList';
import { createTask, deleteTask, fetchTasks, updateTaskStatus } from '../../apis';

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const response = await fetchTasks();
    setTasks(response.data); // response.data가 배열인지 확인
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (task: string) => {
    const response = await createTask(task);
    setTasks(prevTasks => [...prevTasks, response.data]); // response.data가 Task 형식인지 확인
  };

  const toggleTaskStatus = async (task: Task) => {
    await updateTaskStatus(task.id, !task.status);
    setTasks(tasks.map(t => (t.id === task.id ? { ...t, status: !t.status } : t)));
  };

  const removeTask = async (task: Task) => {
    await deleteTask(task.id);
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  return (
    <div className='todo-container'>
      <Clock />
      <ProgressBar tasks={tasks} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} deleteTask={removeTask} />
    </div>
  );
}