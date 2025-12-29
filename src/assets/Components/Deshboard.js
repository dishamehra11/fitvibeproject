// const Dashboard = () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <section className="team-section">
//       <h2>Welcome, {user?.name}</h2>
//       <p>Email: {user?.email}</p>
//       <p>Your enrolled classes will appear here.</p>
//     </section>
//   );
// };

// export default Dashboard;





const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="team-section">
      <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
    </section>
  );
};

export default Dashboard;

