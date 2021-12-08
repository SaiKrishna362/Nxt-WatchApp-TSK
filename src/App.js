import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import Login from './components/Login Route'
import Home from './components/Home Route'
import TrendingRoute from './components/Trending Route'
import GamingRoute from './components/Gaming Route'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItem from './components/VideoItem'
import SavedVideos from './components/SavedVideosRoute'
import NotFound from './components/NotFound'
import Header from './components/Header'

import AppTheme from './context/NxtWatch'

class App extends Component {
  state = {activeTheme: 'light', savedVideos: []}

  changeTheme = activeTheme => {
    this.setState({activeTheme})
  }

  addSavedVideos = async data => {
    const {savedVideos} = this.state
    if (savedVideos.length > 0) {
      const checkSavedVideos = savedVideos.filter(item => item.id === data.id)
      if (checkSavedVideos.length === 0) {
        await this.setState({
          savedVideos: [...savedVideos, data],
        })
      }
    } else {
      await this.setState({
        savedVideos: [...savedVideos, data],
      })
    }
  }

  render() {
    const {activeTheme, savedVideos} = this.state

    return (
      <AppTheme.Provider
        value={{
          activeTheme,
          savedVideos,
          addSavedVideos: this.addSavedVideos,
          changeTheme: this.changeTheme,
        }}
      >
        <div className="app-container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <div className="home-app-container">
              <Header />
              <Switch>
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/" component={Home} />
                <ProtectedRoute
                  exact
                  path="/trending"
                  component={TrendingRoute}
                />
                <ProtectedRoute exact path="/gaming" component={GamingRoute} />
                <ProtectedRoute
                  exact
                  path="/videos/:id"
                  component={VideoItem}
                />
                <ProtectedRoute
                  exact
                  path="/saved-videos"
                  component={SavedVideos}
                />
                <Route exact path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
              </Switch>
            </div>
          </Switch>
        </div>
      </AppTheme.Provider>
    )
  }
}

export default App
