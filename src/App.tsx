import FaqItem from "./components/FaqItem";
import data from "./data/data.json";

function App() {
  return (
    <main>
      <div className="faq">
        <h1>FAQs</h1>
        <div className="faq__list">
          {data.map((item, index) => (
            <>
              <FaqItem
                key={item.id}
                opened={index === 0}
                summary={item.summary}
                text={item.text}
              />
              {index < data.length - 1 && <hr />}
            </>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
