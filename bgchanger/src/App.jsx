

function App() {

  document.addEventListener("DOMContentLoaded", () => {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', bgchange);
    });
  
    function bgchange(event) {
      const i_d = event.target.id;
      document.getElementById('bg').style.backgroundColor = i_d;
    }
  });

  return (
    <>   
       <div id='bg'>
         <div>
            <button id="blue" style={{backgroundColor:'blue', marginRight: '10px'}}>Blue</button>
            <button id="green" style={{backgroundColor:'green',  marginRight: '10px'}}>Green</button>
            <button id="red" style={{backgroundColor:'red', marginRight: '10px' }}>Red</button>
            <button id="black" style={{backgroundColor:'black'}}>Black</button>

         </div>
       </div>
    </>
  )
}

export default App
