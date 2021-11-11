import './App.css';
import InfoCards from './components/InfoCards';
import incomeData from './incomeData';

export default function App() {
  return <InfoCards data={incomeData} />;
}
