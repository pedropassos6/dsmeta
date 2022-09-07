import Header from "./componets/header"
import SalesCard from "./componets/SalesCard" 



function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
              <SalesCard />
          </div>
        </section>
      </main>
    </>
  )

}

export default App
