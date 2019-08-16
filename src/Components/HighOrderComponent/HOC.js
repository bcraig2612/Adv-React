import React from 'react';
import axios from 'axios';
// function component that expects to take in a component and url
// uses the url to retrieve data
// component is what receives that data from the axios call to the url
function myHOC(Component, url) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null
            }
        }

        getData = () => {
            axios.get(url).then(res => {
                console.log('response in HOC', res);
                this.setState({
                    data: res.data
                })
            })
        }

        render() {
            return (
                <div>
                    {
                        this.state.data
                            ?
                            <Component
                                {...this.props}
                                data={this.state.data}
                            />
                            :
                            this.getData()
                    }
                </div>
            )
        }
    }
}

export default myHOC;