import './index.css'
import Layout from '../src/components/layout.jsx';
import Navbar from '../src/components/navbar.jsx';
import styles from '../src/styles/styles.css';
function App() {
  return (
  <div>
      <Navbar></Navbar>
    <div className="body">
      <Layout></Layout>
    </div>
  </div>
  );
}

export default App;
