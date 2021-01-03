import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Footer from './Footer';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('React JS')
    }
    
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video})
        
    };
    
    render () {
        return (
            <div className="container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="content-wrapper">
                    <div className="content-left">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="content-right">
                        <VideoList 
                            onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos} 
                        />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;