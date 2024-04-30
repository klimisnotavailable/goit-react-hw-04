import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { getImages } from './images-api';
import ImageGallery from './components/imageGallery/ImageGallery';
import toast, { Toaster } from 'react-hot-toast';
import { MagnifyingGlass } from 'react-loader-spinner';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const toastSettings = {
  duration: 4000,
  position: 'top-center',
  iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
}

function App() {
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false)
 
  const loadMore = () => {
    setPage(page + 1)
  };

  const showError = () => toast.error('Enter something you want to see',toastSettings);
  
  const onSearch = (newSearch) => {
    setQuery(newSearch)
    setPage(1)
  };

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true)
        const data = await getImages(query, page)
        setImagesData(prevImages => {
          return [...prevImages, ...data.results]
        })
      }
      catch (error) {
        setError(true)
      }
      finally {
        setLoading(false)
      }
    }

    fetchImages();
  }, [page, query]);

  return (
    <>
      <SearchBar onSearch={onSearch} catchError={showError}></SearchBar>
      <Toaster />
      {imagesData.length > 0 && <ImageGallery data={imagesData} ></ImageGallery>}
      {loading && <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"/>
      }
      {imagesData.length > 0 && <button onClick={loadMore}>Load more images</button>}
      <button onClick={() => { setIsOpen(true) }}>open modal</button>

    </>
  )
}

export default App
