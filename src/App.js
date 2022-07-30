import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './stylesheets/styles.scss'
import SplitPane from './components/SplitLayout';
import Map from './components/Map';
import SearchPane from './components/SearchPane';

function App() {
  return (
    <div className="App">
      <SplitPane
        left={<SearchPane />}
        right={<Map />}
       />
    </div>
  );
}

export default App;
