import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import store, { persistor } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { SubmitedContextProvider } from './context/Submited.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SubmitedContextProvider>
          <ToastContainer />
          <main className='bg-[#34a265] h-screen  max-md:h-full w-full'>
            <App />
          </main>
        </SubmitedContextProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
