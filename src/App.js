import React, { Component } from 'react';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter'
import CounterExp from './Components/CounterExp';
import FunctionHandler from './Components/FunctionHandler';
import ClassHandler from './Components/classHandler';
import EventBind from './Components/EventBind';
import ChildComponent from './Components/ChildComponent';
// import Parent from './Components/Parent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyle.css'
import style from './appStyle.module.css'
import Forms from './Components/Forms';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDom from './Components/FragmentDom';
import Table from './Components/Table';
import ParentCom from './Components/ParentCom';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParent from './Components/FRParent';
import Portal from './Components/Portal';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import HoverCounterTwo from './Components/HoverCounterTwo';
import ClickCounterTwo from './Components/ClickCounterTwo';
import User from './Components/User';
import Count from './Components/Count';
import ComponentC from './Context/ComponentC';
import { UserProvider } from './Context/userContext'
import UserParent from './Components/UserParent';
import UserChild from './Components/UserChild';
import HoverHOC from './hoc/HoverHOC';
import UserCoordinate from './renderprops/UserCoordinate';
import UserCoorDisplay from './renderprops/UserCoorDisplay';
import Datafetch from './Components/Datafetch';
import Parent from './Refs/Parent'
class App extends Component {
  render() {

    return (
      <div className="App">
        {/*<h2 className='warning'>Warning</h2>
      <h2 className={style.success}>Success</h2>
    <Greet name ="Tushar" nickName= "Honey">This is children Component</Greet>*/}
        {/* <Greet name ="Kanu" nickName= "Chotu">
        <button>Action</button>
        </Greet>
        <Greet name ="Anuja" nickName= "Bijli"/>
        <Welcome name ="Tushar" nickName= "Honey"/>
        <Welcome name ="Kiran" nickName= "Hugsy"/>
        <Welcome name ="Kanu" nickName= "Chotu"/> 
        <Message/>*/}

        {/*<Counter/>*/}
        {/*<FunctionHandler/>*/}
        {/*<EventBind/>*/}

        {/*<ClassHandler/>*/}
        {/*<Parent/>*/}
        {/*<UserGreeting/>*/}
        {/*<NameList/>*/}
        {/*<Stylesheet primary = {false}/>*/}

        {/*<Inline/>*/}
        {/*<Forms/>*/}
        {/*<LifeCycleA/>*/}
        {/*<FragmentDom/>*/}
        {/*<Table/>*/}
        {/* <ParentCom/>*/}
        {/* <RefsDemo/> */}
        {/* <FocusInput/> */}
        {/* <FRParent/> */}
        { /*<Portal/>*/}
        { /*<ErrorBoundary>
      <Hero name= "Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero name = "Joker"/>
</ErrorBoundary>*/}
        { /*ClickCounter name = "Tushar"/*/}
        { /*HoverCounterTwo/>*/}
        { /*<ClickCounterTwo/>*/}


        {/* <User name = {()=>"Tushar"}/>

      <Count render = {(count, incrementHander) =>(
        <ClickCounterTwo count={count} incrementHander={incrementHander}/>
      )}/>
      <Count render = {(count, incrementHander) =>(
        <HoverCounterTwo count={count} incrementHander={incrementHander}/>
      )}/> */}

        {/* <UserProvider value="Kanupriya">
      
        <ComponentC />

      </UserProvider> */}

        {/* <UserParent render ={(x,y,showCoordinate)=>(
        <UserChild x = {x} y = {y} showCoordinate={showCoordinate}/>
      )}/> */}
        {/* <HoverHOC/> */}

        {/* <UserCoordinate render = {(x,y,showCoordinate)=>(
        <UserCoorDisplay x={x} y={y} showCoordinate = {showCoordinate}/>
      )}/> */}
        {/* <Datafetch/> */}
        <Parent />

      </div>

    )
  }


}

export default App;
