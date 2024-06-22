import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
import Insert from "./Components/insert";
import Update from "./Components/Update";
import Search from "./Components/Search";
import RecEdit from "./Components/RecEdit";


const App=()=>{

  return(
    <BrowserRouter>
    <Layout>
    <Routes>
    
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="insert" element={<Insert />} />
    <Route path="myedit/:id" element={<RecEdit />} />
    <Route path="update" element={<Update />} />
    <Route path="search" element={<Search />} />
    
    </Routes>
    </Layout>
   </BrowserRouter>
  )
}
export default App;