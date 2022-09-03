import React,{useState, useEffect} from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

const Welcome = () => {
  const [userName, setUserName] = useState('');
  useEffect(()=>{
    const fetchUserName = async ()=>{
      setUserName(await JSON.parse(localStorage.getItem(
        process.env.REACT_APP_LOCALHOST_KEY
      )).username );
    }
    fetchUserName();
  },[userName]);
  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select chat to start messaging!</h3>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e00ff;
  }
`;
export default Welcome;
