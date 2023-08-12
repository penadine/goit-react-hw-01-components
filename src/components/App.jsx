import React from 'react';
import Profile from './1/Profile';
import Statistics from './2/Statistics';
import FriendList from './3/FriendList';
import TransactionHistory from './4/TransactionHistory';
import user from './1/user.json';
import data from './2/data.json';
import friends from './3/friends.json';
import transactions from './4/transactions.json';

export const App = () => {
  return (
    <div>
      <div>1</div>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <br />
       <div>2</div>
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <br />
      <div>3</div>
      <div>
        <FriendList friends={friends} />
      </div>
      <br />
      <div>4</div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
