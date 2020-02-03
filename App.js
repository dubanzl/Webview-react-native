import React, {Component} from 'react';
import WebView from 'react-native-webview-fullscreen';

class MyWeb extends Component {
    render() {
        return <WebView source={{uri: 'https://huellapps.com'}} />;
    }
}

export default MyWeb;
