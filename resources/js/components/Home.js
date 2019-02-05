import React, { Component } from 'react';
import { HeroImage } from './Cssku';
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
const banner = {
   height:'500px'
}
export default class Home extends Component {
    render() {
        return (
            <Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1" style={banner}>
                <CarouselInner>
                    <CarouselItem itemId="1">
                        <View>
                        <img className="d-block w-100" src="https://cdn.idntimes.com/content-images/post/20170925/gunung-ungaran-2c9a2182b22fd5a78b925e29b44c13f8.jpg" alt="First slide" />
                        <Mask overlay="black-light" />
                        </View>
                        <CarouselCaption>
                        <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="2">
                    <View>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
                    <Mask overlay="black-strong" />
                    </View>
                    <CarouselCaption>
                    <h3 className="h3-responsive">Strong mask</h3>
                    <p>Second text</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="3">
                    <View>
                    <img className="d-block w-100" src="https://cdn.idntimes.com/content-images/community/2018/04/puncak-merbabu-1d198c03f1e132705b770e25409f5394_600x400.JPG" alt="Third slide" />
                    <Mask overlay="black-slight" />
                    </View>
                    <CarouselCaption>
                    <h3 className="h3-responsive">Slight mask</h3>
                    <p>Third text</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="4">
                    <View>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                    <Mask overlay="black-light" />
                    </View>
                    <CarouselCaption>
                    <h3 className="h3-responsive">Sopot Beach</h3>
                    <p>Taken june 21th by @mattonit</p>
                    </CarouselCaption>
                </CarouselItem>
                </CarouselInner>
            </Carousel>
        );
    }
}
