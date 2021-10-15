import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import Search from "./components/Search";
function App() {
  // const [books, setBooks] = useState([]);
  // const [searchText, setSearchText] = useState('');
  // const fetchData = async (query) => {
  //   const pastes = await fetch(`/pastes?search=${query}`).then((res) => res.json());
  //   setPastes(pastes.reverse());
  // };

  // const handleSearch = (e) => {
  //   setSearchText(e.target.value);
  // }

  // useEffect(() => {
  //   fetchData(searchText);
  // }, [searchText]);

  return (
    <div>
      <TopBar />
      <Search />
      <div></div>
      <div>fotter</div>
    </div>
  );
}

export default App;
