import React from 'react';
import './Cards.css';
import cardData from '../../Data/Data';

function Card(props) {
  return (
    <div className="card">
      {props.icon}
      {props.value}
      {props.title}

      
    </div>
  );
}

function AdminDashboard() {
  const cards = cardData.map((card) => (
    <Card key={card.id} icon={card.icon} value={card.value}title={card.title}/>
  ));

  return <div className="dashboard">{cards}</div>;
}

export default AdminDashboard;
  
