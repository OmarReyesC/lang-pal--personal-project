
function App() {

  return (
    <main className="review">
      <p className="review__title label">Write the correct translation into Spanish</p>
      <img className="review__pic" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="This picture evocates friendship" />
      <input className="review__field label" type="text" />
      <p className="review__translation body" >friendship</p>
    </main>
  )  
}

export default App