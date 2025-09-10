import { useState, useEffect } from "react"
import { 
  Container, 
  TodoCard, 
  Header, 
  Title, 
  ThemeToggle,
  ThemeIcon,
  InputContainer, 
  Input, 
  AddButton, 
  TaskList, 
  TaskItem, 
  TaskText, 
  TaskActions, 
  CompleteButton, 
  DeleteButton, 
  EditButton,
  EditInput,
  SaveButton,
  CancelButton,
  StatsContainer, 
  StatItem, 
  FilterContainer, 
  FilterButton,
  EmptyState,
  EmptyIcon,
  EmptyText
} from "./StyApp"

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [filter, setFilter] = useState("all") // all, completed, pending
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme ? JSON.parse(savedTheme) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date()
      }
      setTasks([...tasks, newTask])
      setInputValue("")
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask()
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const startEditing = (id, text) => {
    setEditingId(id)
    setEditingText(text)
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditingText("")
  }

  const saveEditing = () => {
    if (editingText.trim() !== "") {
      setTasks(tasks.map(task => 
        task.id === editingId ? { ...task, text: editingText.trim() } : task
      ))
    }
    setEditingId(null)
    setEditingText("")
  }

  const handleEditKeyPress = (event) => {
    if (event.key === "Enter") {
      saveEditing()
    } else if (event.key === "Escape") {
      cancelEditing()
    }
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed
    if (filter === "pending") return !task.completed
    return true
  })

  const completedCount = tasks.filter(task => task.completed).length
  const pendingCount = tasks.filter(task => !task.completed).length

  return (
    <Container isDarkMode={isDarkMode}>
      <TodoCard isDarkMode={isDarkMode}>
        <Header>
          <Title isDarkMode={isDarkMode}>📝 Minhas Tarefas</Title>
          <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode}>
            <ThemeIcon isDarkMode={isDarkMode}>
              {isDarkMode ? '☀️' : '🌙'}
            </ThemeIcon>
          </ThemeToggle>
        </Header>

        <InputContainer>
          <Input 
            type="text" 
            placeholder="Digite sua nova tarefa..." 
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            isDarkMode={isDarkMode}
          />
          <AddButton onClick={handleAddTask} isDarkMode={isDarkMode}>
            ➕ Adicionar
          </AddButton>
        </InputContainer>

        <StatsContainer isDarkMode={isDarkMode}>
          <StatItem isDarkMode={isDarkMode}>
            <span>📊 Total: {tasks.length}</span>
          </StatItem>
          <StatItem isDarkMode={isDarkMode}>
            <span>✅ Concluídas: {completedCount}</span>
          </StatItem>
          <StatItem isDarkMode={isDarkMode}>
            <span>⏳ Pendentes: {pendingCount}</span>
          </StatItem>
        </StatsContainer>

        <FilterContainer>
          <FilterButton 
            active={filter === "all"} 
            onClick={() => setFilter("all")}
            isDarkMode={isDarkMode}
          >
            Todas
          </FilterButton>
          <FilterButton 
            active={filter === "pending"} 
            onClick={() => setFilter("pending")}
            isDarkMode={isDarkMode}
          >
            Pendentes
          </FilterButton>
          <FilterButton 
            active={filter === "completed"} 
            onClick={() => setFilter("completed")}
            isDarkMode={isDarkMode}
          >
            Concluídas
          </FilterButton>
        </FilterContainer>

        <TaskList isDarkMode={isDarkMode}>
          {filteredTasks.length === 0 ? (
            <EmptyState isDarkMode={isDarkMode}>
              <EmptyIcon isDarkMode={isDarkMode}>📝</EmptyIcon>
              <EmptyText isDarkMode={isDarkMode}>
                {filter === "all" 
                  ? "Nenhuma tarefa ainda. Adicione uma nova!" 
                  : filter === "completed" 
                    ? "Nenhuma tarefa concluída ainda." 
                    : "Nenhuma tarefa pendente."}
              </EmptyText>
            </EmptyState>
          ) : (
            filteredTasks.map((task) => (
              <TaskItem key={task.id} completed={task.completed} isDarkMode={isDarkMode}>
                {editingId === task.id ? (
                  <EditInput
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyPress={handleEditKeyPress}
                    isDarkMode={isDarkMode}
                    autoFocus
                  />
                ) : (
                  <TaskText completed={task.completed} isDarkMode={isDarkMode}>
                    {task.text}
                  </TaskText>
                )}
                <TaskActions>
                  {editingId === task.id ? (
                    <>
                      <SaveButton onClick={saveEditing} isDarkMode={isDarkMode}>
                        💾
                      </SaveButton>
                      <CancelButton onClick={cancelEditing} isDarkMode={isDarkMode}>
                        ❌
                      </CancelButton>
                    </>
                  ) : (
                    <>
                      <EditButton 
                        onClick={() => startEditing(task.id, task.text)}
                        isDarkMode={isDarkMode}
                      >
                        ✏️
                      </EditButton>
                      <CompleteButton 
                        onClick={() => toggleTask(task.id)}
                        completed={task.completed}
                        isDarkMode={isDarkMode}
                      >
                        {task.completed ? "↩️" : "✅"}
                      </CompleteButton>
                      <DeleteButton onClick={() => deleteTask(task.id)} isDarkMode={isDarkMode}>
                        🗑️
                      </DeleteButton>
                    </>
                  )}
                </TaskActions>
              </TaskItem>
            ))
          )}
        </TaskList>
      </TodoCard>
    </Container>
  )
}



export default App