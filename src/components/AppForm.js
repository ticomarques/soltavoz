import React, { Component } from 'react'
import { AwesomeButton } from 'react-awesome-button'

import 'react-awesome-button/dist/styles.css'

export default class AppForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            list: '',
            text: '',
            rate: 1,
            pitch: 1,
            voice: ''
        }
    }

    getVoiceList = () => {
        let voices = []

        voices = window.speechSynthesis.getVoices()
        this.setState({ list: voices })
    }

    componentDidMount = () => {
        this.getVoiceList();
    }

    onTextChange = (e) => {
        const text = e.target.value
        this.setState({ text })
    }

    onRateChange = (e) => {
        const rate = e.target.value
        this.setState({ rate })
    }

    onPitchChange = (e) => {
        const pitch = e.target.value
        this.setState({ pitch })
    }
    
    onVoiceChange = (e) => {
        const voice = e.target.value
        this.setState({ voice })
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (this.state.text === '') {
            alert("Please, type a text for speaching...")
        }

        let speaker = new SpeechSynthesisUtterance();
        speaker.text = this.state.text;
        speaker.rate = this.state.rate;
        speaker.pitch = this.state.pitch;

        speechSynthesis.speak(speaker);
    }



    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form className="mb-5" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <textarea 
                                    name="" 
                                    id="text-input" 
                                    className="form-control form-control-lg" 
                                    placeholder="Type anything..."
                                    onChange={this.onTextChange}
                                >
                                </textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="rate">Rate</label>
                                <div id="rate-value" className="badge badge-primary float-right">{this.state.rate}</div>
                                <input 
                                    type="range" 
                                    id="rate" 
                                    className="custom-range" 
                                    min="0.5" 
                                    max="2" 
                                    value={this.state.rate} 
                                    step="0.1"
                                    onChange={this.onRateChange} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pitch">Pitch</label>
                                <div id="pitch-value" className="badge badge-primary float-right">{this.state.pitch}</div>
                                <input 
                                    type="range" 
                                    id="pitch" 
                                    className="custom-range" 
                                    min="0" 
                                    max="2" 
                                    value={this.state.pitch} 
                                    step="0.1"
                                    onChange={this.onPitchChange} 
                                />
                            </div>  

                            <AwesomeButton type="primary" size="medium">Speak it</AwesomeButton>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}


