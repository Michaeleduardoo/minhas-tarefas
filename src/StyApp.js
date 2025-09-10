import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  transition: background 0.3s ease;
`;

export const TodoCard = styled.div`
  background: ${(props) =>
    props.isDarkMode ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.95)"};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 20px 40px rgba(0, 0, 0, 0.3)"
      : "0 20px 40px rgba(0, 0, 0, 0.1)"};
  border: 1px solid
    ${(props) =>
      props.isDarkMode
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(255, 255, 255, 0.2)"};
  transition: all 0.3s ease;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #64b5f6, #42a5f5)"
      : "linear-gradient(135deg, #667eea, #764ba2)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

export const ThemeToggle = styled.button`
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #ffd54f, #ffb300)"
      : "linear-gradient(135deg, #667eea, #764ba2)"};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ThemeIcon = styled.span`
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(180deg);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 15px 20px;
  border: 2px solid ${(props) => (props.isDarkMode ? "#404040" : "#e1e5e9")};
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  background: ${(props) => (props.isDarkMode ? "#2a2a2a" : "#f8f9fa")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#212529")};

  &:focus {
    border-color: ${(props) => (props.isDarkMode ? "#64b5f6" : "#667eea")};
    background: ${(props) => (props.isDarkMode ? "#1a1a1a" : "white")};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.isDarkMode
          ? "rgba(100, 181, 246, 0.1)"
          : "rgba(102, 126, 234, 0.1)"};
  }

  &::placeholder {
    color: ${(props) => (props.isDarkMode ? "#888888" : "#adb5bd")};
  }
`;

export const AddButton = styled.button`
  padding: 15px 25px;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #64b5f6, #42a5f5)"
      : "linear-gradient(135deg, #667eea, #764ba2)"};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px
      ${(props) =>
        props.isDarkMode
          ? "rgba(100, 181, 246, 0.3)"
          : "rgba(102, 126, 234, 0.3)"};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  padding: 20px;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #2a2a2a, #1a1a1a)"
      : "linear-gradient(135deg, #f8f9fa, #e9ecef)"};
  border-radius: 12px;
  border: 1px solid ${(props) => (props.isDarkMode ? "#404040" : "#e1e5e9")};
  transition: all 0.3s ease;
`;

export const StatItem = styled.div`
  text-align: center;

  span {
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#495057")};
    transition: color 0.3s ease;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 25px;
`;

export const FilterButton = styled.button`
  flex: 1;
  padding: 12px 16px;
  background: ${(props) => {
    if (props.active) {
      return props.isDarkMode
        ? "linear-gradient(135deg, #64b5f6, #42a5f5)"
        : "linear-gradient(135deg, #667eea, #764ba2)";
    }
    return props.isDarkMode ? "#2a2a2a" : "#f8f9fa";
  }};
  color: ${(props) =>
    props.active ? "white" : props.isDarkMode ? "#e0e0e0" : "#495057"};
  border: ${(props) =>
    props.active
      ? "0px"
      : props.isDarkMode
      ? "2px solid none"
      : "2px solid #e1e5e9"};

  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => {
      if (props.active) {
        return props.isDarkMode
          ? "linear-gradient(135deg, #64b5f6, #42a5f5)"
          : "linear-gradient(135deg, #667eea, #764ba2)";
      }
      return props.isDarkMode ? "#404040" : "#e9ecef";
    }};
    transform: translateY(-1px);
  }
`;

export const TaskList = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 10px 0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => (props.isDarkMode ? "#2a2a2a" : "#f1f1f1")};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.isDarkMode ? "#555" : "#c1c1c1")};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => (props.isDarkMode ? "#777" : "#a8a8a8")};
  }
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  margin-bottom: 12px;
  background: ${(props) => {
    if (props.completed) {
      return props.isDarkMode ? "#1a4d1a" : "#e8f5e8";
    }
    return props.isDarkMode ? "#2a2a2a" : "white";
  }};
  border: 2px solid
    ${(props) => {
      if (props.completed) {
        return props.isDarkMode ? "#4caf50" : "#28a745";
      }
      return props.isDarkMode ? "#404040" : "#e1e5e9";
    }};
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 2px 8px rgba(0, 0, 0, 0.2)"
      : "0 2px 8px rgba(0, 0, 0, 0.05)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.isDarkMode
        ? "0 4px 12px rgba(0, 0, 0, 0.3)"
        : "0 4px 12px rgba(0, 0, 0, 0.1)"};
  }
`;

export const TaskText = styled.span`
  flex: 1;
  font-size: 16px;
  color: ${(props) => {
    if (props.completed) {
      return props.isDarkMode ? "#888" : "#6c757d";
    }
    return props.isDarkMode ? "#e0e0e0" : "#212529";
  }};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-weight: 500;
  transition: color 0.3s ease;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const EditInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 2px solid ${(props) => (props.isDarkMode ? "#64b5f6" : "#667eea")};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  background: ${(props) => (props.isDarkMode ? "#1a1a1a" : "white")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#212529")};
  font-weight: 500;
  transition: all 0.3s ease;
  margin-right: 8px;

  &:focus {
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.isDarkMode
          ? "rgba(100, 181, 246, 0.2)"
          : "rgba(102, 126, 234, 0.2)"};
  }
`;

export const EditButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #ff9800, #f57c00)"
      : "linear-gradient(135deg, #ff9800, #f57c00)"};
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);
  }
`;

export const SaveButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #2196f3, #1976d2)"
      : "linear-gradient(135deg, #2196f3, #1976d2)"};
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
  }
`;

export const CancelButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #e91e63, #c2185b)"
      : "linear-gradient(135deg, #e91e63, #c2185b)"};
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3);
  }
`;

export const CompleteButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: ${(props) => {
    if (props.completed) {
      return props.isDarkMode
        ? "linear-gradient(135deg, #ffb74d, #ff9800)"
        : "linear-gradient(135deg, #ffc107, #ff8c00)";
    }
    return props.isDarkMode
      ? "linear-gradient(135deg, #4caf50, #388e3c)"
      : "linear-gradient(135deg, #28a745, #20c997)";
  }};
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #f44336, #d32f2f)"
      : "linear-gradient(135deg, #dc3545, #e74c3c)"};
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: ${(props) => (props.isDarkMode ? "#888" : "#6c757d")};
  transition: color 0.3s ease;
`;

export const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 16px;
  opacity: 0.5;
  transition: opacity 0.3s ease;
`;

export const EmptyText = styled.p`
  font-size: 16px;
  margin: 0;
  font-weight: 500;
  color: ${(props) => (props.isDarkMode ? "#888" : "#6c757d")};
  transition: color 0.3s ease;
`;
