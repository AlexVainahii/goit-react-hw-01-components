import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import user from '../user.json'
import data from '../data.json';
import React from 'react';
export const App = () => {
  return (
    <>
    <h2>Task1</h2>
     <Profile 
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar} 
       followers={user.stats.followers}
       views={user.stats.views} 
      likes={user.stats.likes}
     />
     <h2>Task2</h2>
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
     <h2>Task3</h2>
     <h2>Task4</h2>
    </>
  );
};
