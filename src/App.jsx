/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { AppBar, Toolbar, Typography } from '@mui/material'

// const pages = ['Home', 'About me', 'Contact']

function App () {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kevin Fernando Cabrera Vaca
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default App
