import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Index from './component/Index'
import Tabs from './component/Tabs'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/" element={<Tabs />} />

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
